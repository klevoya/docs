---
title: Tokens
---

Hydra comes with a set of predefined _contract templates_ that can be used without explicitly defining them in the [config file](../cli/config.md).
The `eosio.token` contract is one of them, making it very easy to deploy token contracts and creating + issuing tokens to accounts.

:::note Using a different eosio.token contract
In case there's a contract template with the `eosio.token` name defined in the [config file](../cli/config.md), it will overwrite the predefined one.
:::

The predefined `eosio.token` contract uses the eosio.token-v1.7 contract of the [eosio.contracts repo](https://github.com/EOSIO/eosio.contracts/tree/3cbe918e57781542c1b0b706621c723f2229a1f1/contracts/eosio.token) extended with [JSON fixture loading](./initial-contract-tables.md).

Creating tokens and issuing initial balances can be done by creating two `stat.json` and `accounts.json` fixture files in the **`tests/fixtures/eosio.token`** directory.

#### stat.json

```json
{
  "EOS": [
    {
      "supply": "270.6013 EOS",
      "max_supply": "10000000000.0000 EOS",
      "issuer": "eosio.token"
    }
  ]
}
```

#### accounts.json

```json
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

After creating all accounts and loading the fixtures, the token has been created and accounts will have an initial balance.

```js
let blockchain = new Blockchain(config);
let tester1 = blockchain.createAccount(`tester1`);
let player1 = blockchain.createAccount(`player1`);
let player2 = blockchain.createAccount(`player2`);

let token = blockchain.createAccount(`eosio.token`);
token.setContract(blockchain.contractTemplates[`eosio.token`]);
await token.loadFixtures();

const accountsTable = tester.getTableRowsScoped(`accounts`)

console.log(accountsTable)
// {
//   tester1: [{ balance: "70.6013 EOS" }],
//   player1: [{ balance: "100.0000 EOS" }],
//   player2: [{ balance: "100.0000 EOS" }]
// }
```
