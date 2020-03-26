---
title: Initial Table Data
---

Hydra allows loading of smart contract table data which is very useful for defining the initial context the tests will run in.
Instead of defining a sequence of actions that results in the table state, the table state is simply defined in JSON files.

## Adding the `hydraload` action to smart contracts

Every contract template making use of this feature requires adding the `hydraload` action which can be added by including the `hydra.hpp` helper file.
This C++ header file is created in `tests/hydra.hpp` when running the [init command](../cli/cli.md#init) and can be copied to the smart contract source files.

:::note Why is this needed?
The ABI of a contract defines the table _structure_, but the primary and secondary key derivation functions are WASM-internal. To make sure the loaded data can also be used from within the contract, the corresponding keys for each index defined need to be computed for each table record.
:::

Adding the `hydraload` action is done using the `HYDRA_FIXTURE_ACTION` macro:

```cpp
#include "hydra.hpp"

class [[eosio::contract("eosio.token")]] token : public contract {
  struct [[eosio::table]] currency_stats {
    asset    supply;
    asset    max_supply;
    name     issuer;

    uint64_t primary_key()const { return supply.symbol.code().raw(); }
  };
  typedef eosio::multi_index< "accounts"_n, account > accounts;
  typedef eosio::multi_index< "stat"_n, currency_stats > stats;

  // the HYDRA_FIXTURE_ACTION macro adds the hydra action
  // to the contract and the ABI
  // each table to load data for must be specified here
  // the macro takes a list of tuples, each tuple defining a table
  // ((table_name)(struct_name)(multi_index_typedef))
  // the same order as the template parameters & name of the multi_index typedef
  HYDRA_FIXTURE_ACTION(
    ((accounts)(account)(accounts))
    ((stat)(currency_stats)(stats))
  )
}

// if a custom apply function is used, the hydraload action can be exposed
// using the HYDRA_APPLY_FIXTURE_ACTION(CONTRACT_CLASS_NAME) macro
extern "C" void apply(uint64_t receiver, uint64_t code, uint64_t action) {
  if (code == receiver) {
    HYDRA_APPLY_FIXTURE_ACTION(token)
    switch (action) { EOSIO_DISPATCH_HELPER(token, (create)(issue)(transfer)) }
  }
}
```

It is recommended to remove the `hydraload` action before deploying the smart contract to production.
However, even if this precaution is not performed it shouldn't be a security concern as the `hydraload` action requires the authorization of the `eosio` system account.
Including or excluding the `hydraload` action can be toggled by defining the `HYDRA_SKIP_HELPERS` macro.

```cpp
// define this for production use
#define HYDRA_SKIP_HELPERS
```

## Creating the JSON fixtures

The contract table data to load is defined through JSON files - one JSON file per table. Running the [init command](../cli/cli.md#init) creates example boilerplate files in `tests/fixtures/<contract>/<table>.json`

The structure of a JSON fixture is a JSON object mapping scopes to an array of table records.

```json
// example eosio.token accounts table
// scope is account name
// table record must have all fields and correct types
// as defined by the table structure in the ABI
{
    "tester1": [
        {
            "balance": "70.6013 EOS"
        }
    ],
    "player1": [
        {
            "balance": "100.0000 EOS"
        }
    ],
    "player2": [
        {
            "balance": "100.0000 EOS"
        }
    ]
}
```

The path to the fixtures must be added to the [`hydra.yml` configuration file](../cli/config.md).

## Loading Fixtures

Once the contract is compiled with the hydraload action exposed in the ABI, tables can be loaded by using the [Account's `loadFixtures`](../api/account.md) method.

```js
// make sure fixtures is defined for contract template in config
let blockchain = new Blockchain(config);
let tester = blockchain.createAccount(`tester`);
tester.setContract(blockchain.contractTemplates[`eosio.token`]);

// loads fixtures for the currently deployed contract
await tester.loadFixtures();

// reset tables before each test
beforeEach(async () => {
  tester.resetTables();
  await tester.loadFixtures();
});
```
