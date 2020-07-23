---
title: Overview
---

# Folder Structure

After running the `hydra init` command the following files and directories are created:

- `hydra.yml`: The [configuration file](../cli/config.md) defining contract templates that can be referenced in the tests and other general options.
- `tests/<contract>.test.js`: Boilerplate test files for every selected contract.
- `fixtures/<contract>/<table>.json`: These JSON fixture files can be used in the tests to [load initial table contract data](./initial-contract-tables.md).
- `hydra.hpp`: This C++ helper file must be consumed by contracts that want to make use of the [loading initial table contract data feature](./initial-contract-tables.md).

# Test File

The `init` command creates separate `tests/<contract>.test.js` files for each selected contract. Each test file already contains contract-specific boilerplate to quickly get started writing tests.

Each test file first imports the hydra library and loads the `hydra.yml` config file.

```js
const { loadConfig, Blockchain } = require("hydra");

const config = loadConfig("hydra.yml");
```

The test specification starts by creating a new [Blockchain](../api/blockchain.md) object and creates a new [Account](../api/account.md) with the same name as the contract.

:::note Assertion Libraries
This document uses [jest](https://jestjs.io/) as the assertion library. Any other testing framework can be used, but they might slightly differ in their syntax.
:::

```js
describe("eosio.token", () => {
  let blockchain = new Blockchain(config);
  let tester = blockchain.createAccount(`eosio.token`);

  // ...
}
```

Note that there is _no need to manage any keys_ for the accounts, although [custom permissions](./permissions.md) can be configured to test the contract under the same permissions as in a production environment.

_Once_ before any test is run, the created account's code is set to the contract template. It must have the same key as specified in the loaded config file.
The boilerplate also updates the account's `active` permission to include the [`eosio.code`](https://github.com/EOSIO/eos/issues/3013#issuecomment-388983168) permission - a requirement if the contract code sends actions or transactions itself.

```js
beforeAll(async () => {
  tester.setContract(blockchain.contractTemplates[`eosio.token`]);
  tester.updateAuth(`active`, `owner`, {
    accounts: [
      {
        permission: {
          actor: tester.accountName,
          permission: `eosio.code`
        },
        weight: 1
      }
    ]
  });
});
```

Multiple test _tasks_ can be defined in a single test file and it is a good idea to clear the contract's table data before each task.
Then tests can be written by sending transactions and checking the contract tables. 

```js
beforeEach(async () => {
  tester.resetTables();
});

it("can send the create + issue action", async () => {
  expect.assertions(1);

  await tester.contract.create({
    issuer: tester.accountName,
    maximum_supply: "10000000000.0000 EOS"
  });
  await tester.contract.issue({
    to: tester.accountName,
    quantity: "42.0000 EOS",
    memo: "i ❤️ hydra"
  });

  const scope = tester.accountName;
  expect(tester.getTableRowsScoped(`accounts`)).toEqual({
    [scope]: [
      {
        balance: "42.0000 EOS"
      }
    ]
  });
});
```

Sending transactions from the [Account object](../api/account.md) returns a [transaction trace](../api/types.md#ttransactiontrace) that can be used to reason about.

```js
it("prints the correct thing fast", async () => {
  expect.assertions(2);

  const txTrace = await tester.contract.hello();

  // get all print output from initial 'hello' action + inline actions
  const consoleOutput = txTrace.action_traces.map(t => t.console).join(``)

  expect(consoleOutput).toBe("this was printed from the contract");
  // the transaction execution time, note that this is subjective to the Hydra node and will differ from a production environment
  expect(txTrace.elapsed).toBeLessThan(1000)
});
```
