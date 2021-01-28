---
title: LiquidVRAM
---

:::note Paid feature
This is a paid feature. Please check the [pricing page](http://klevoya.com/pricing.html) for our different subscription tiers.
:::

Hydra supports reading and writing [LiquidApps' vRAM tables](https://docs.liquidapps.io/en/v2.0/services/ipfs-service.html).
Unlike standard `eosio::multi_index` tables, vRAM tables are stored and encoded across multiple tables.
Hydra decodes this table data on the fly when using [`getTableRowsScoped`](../api/account.md#gettablerowsscopedtablename-string-dictionarytablerowstructure), so they can be used like any other EOSIO multi-index table.
At the same time, it's possible to use Hydra's exisiting [fixture loading feature](../guides/initial-contract-tables.md) to load initial vRAM table data.

Consider a [token contract](https://github.com/liquidapps-io/zeus-sdk/blob/master/boxes/groups/sample/coldtoken/README.md) storing the user account balances in a vRAM table:

#### coldtoken

```cpp
TABLE account {
    asset    balance;
    uint64_t primary_key()const { return balance.symbol.code().raw(); }
};

typedef dapp::multi_index<"accounts"_n, account> accounts_t;
typedef eosio::multi_index<".accounts"_n, account> accounts_t_v_abi;
TABLE shardbucket {
    std::vector<char> shard_uri;
    uint64_t shard;
    uint64_t primary_key() const { return shard; }
};
typedef eosio::multi_index<"accounts"_n, shardbucket> accounts_t_abi;
```

#### Reading table data

The transfer function can be tested by simply reading the `accounts` table that the `dapp::multi_index` was defined on:

```js
test("it can transfer the vram balance", async () => {
  expect.assertions(1);

  await vram.contract.transfer(
    {
      from: vram.accountName,
      to: user.accountName,
      quantity: `1.0000 TOKENS`,
      memo: `transfer balance`,
    },
    [{ actor: vram.accountName, permission: `active` }]
  );

  // table is actually a shard table but hydra decodes it on the fly
  expect(vram.getTableRowsScoped(`accounts`)).toEqual({
    user: [
      {
        balance: "1.0000 TOKENS",
      },
    ],
    vram: [
      {
        balance: "41.0000 TOKENS",
      },
    ],
  });
});
```

Under the hood, Hydra transforms the vRAM table data to what one would expect.

#### Loading table data

Using the [`hydraload` action](../guides/initial-contract-tables.md), one can inject data into any vRAM table.
Enable it by including the header file and annotating each `dapp::multi_index` type:

```cpp
// #include it at the top
#include "hydra.hpp"

CONTRACT_START()
 public:
  // ...
  // HYDRA_FIXUTRE_ACTION takes tuples of dapp multi-indexes as arguments
  typedef dapp::multi_index<"accounts"_n, account> accounts_t;

  HYDRA_FIXTURE_ACTION(
      ((accounts)(account)(accounts_t))
  )

  // ...

// don't forget to add hydraload to the list of actions here too (!)
CONTRACT_END((create)(issue)(transfer)(hydraload))
```

Afterwards, specify the data to load in your tests:

```js
test("it loads vram fixtures", async () => {
  expect.assertions(1);

  await vram.resetTables();

  const tx = await vram.loadFixtures(`accounts`, {
    user: [
      {
        balance: "1.0000 TOKENS",
      },
    ],
    vram: [
      {
        balance: "41.0000 TOKENS",
      },
    ],
  });

  // table is actually a shard table but hydra decodes it on the fly
  expect(vram.getTableRowsScoped(`accounts`)).toEqual({
    user: [
      {
        balance: "1.0000 TOKENS",
      },
    ],
    vram: [
      {
        balance: "41.0000 TOKENS",
      },
    ],
  });
});
```
