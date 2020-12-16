---
title: Blockchain
---

The Blockchain object keeps the state of all accounts and contracts.


## Methods

### constructor(config: [THydraConfig](./types.md#thydraconfig)): void

Creates a new blockchain object

### createAccount(accountName: string,ownerAuth?: [TAuthority](./types.md#tauthority), activeAuth?: [TAuthority](./types.md#tauthority)): [Account](./account.md)

Creates a new account

### sendTransaction(transaction: [TTransaction](./types.md#ttransaction)): Promise<[TTransactionTrace](./types.md#ttransactiontrace)\>

Executes a transactions

### getDeferredTransactions(): [TDeferredTransaction](./types.md#tdeferredtransaction)[]

Gets all deferred transactions

### clearDeferredTransactions(): void

Clears all deferred transactions

### setCurrentTime(date: Date): void

Sets the current time of the blockchain changing the value returned by `eosio::current_time_point` and similar intrinsics.

### setProtocolFeature(featureName: [TProtocolFeature](./types.md#tprotocolfeatures), enable: boolean): void

Enable or disable an EOSIO protocol feature

## Fields

### contractTemplates: Dictionary<ContractTemplate\>

Gets configured contract templates that can be used for [setContract](./account.md#setcontractcontract-contract-void).
Contract templates are configured through the `config` parameter in the [constructor](./blockchain.md#constructorconfig-thydraconfig-void)

### accounts: Dictionary<[Account](./account.md)\>

Gets all user-created and default-created accounts. Keyed by account name
