---
title: Account.Contract
---

The contract object of an [Account](./account.md) is used to interact with the contract's actions.

## Methods

The contract object defines a function for each action of the contract's ABI.

### {{actionName}}(data: ActionData, authorization?:[TActionAuthorization](./types.md#tactionauthorization)): Promise<[TTransactionTrace](./types.md#ttransactiontrace)\>

Sends a transaction consisting of this single action with the provided data and authorization payload.
If no authorization is provided, it falls back to the `active` permission of the account the contract is deployed on.