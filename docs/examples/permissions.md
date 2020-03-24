---
title: Custom Permissions
---

It can be useful to mirror the permission structure of the production environment in order to catch unsatisfied authorization errors early.
Hydra makes this possible by creating custom permissions and linking these permissions to specific contract actions of an account. (`linkAuth`)

There shouldn't be any need to attach EOSIO public keys to permissions for transaction signing while testing. Hydra automatically handles this part by using a default key.

```js
let blockchain = new Blockchain(config);
// the eosio system account always exists
let eosio = blockchain.accounts.eosio;
let tester = blockchain.createAccount(`tester`);
tester.setContract(blockchain.contractTemplates[`eosio.token`]);

// create new 'child' permission with 'active' as parent
tester.updateAuth(`child`, `active`, {
  threshold: 1,
  // omit 'keys', Hydra will add a default key
  // keys: []
  // can optionally add accounts
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

// link tester@child to tester::create action
await eosio.contract.linkauth(
  {
    account: tester.accountName,
    requirement: "child",
    code: tester.accountName,
    type: "create"
  },
  [{ actor: tester.accountName, permission: `active` }]
);
await tester.contract.create(
  {
    issuer: tester.accountName,
    maximum_supply: `1.0000 TOKENS`
  },
  // specify transaction to run with child permission
  [{ actor: tester.accountName, permission: `child` }]
);
```
