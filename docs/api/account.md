---
title: Account
---

Accounts represent EOSIO accounts and are the main form of interacting with the Hydra blockchain environment.
A contract template can be deployed on an account and used to send transactions and read table data.

Accounts are created using the [createAccount method](./blockchain.md#createaccountaccountname-stringownerauth-tauthority-activeauth-tauthority-account) of the Blockchain object.

## Methods

### setContract(contract: Contract): void

Sets contract and ABI of this account

### getTableRowsScoped(tableName: string): Dictionary<TableStructure[]\>

Gets the table rows of the specified table, keyed by scopes

### resetTables(): void

Deletes all of this account's table data

### loadFixtures(): Promise<void\>

Loads initial contract data defined for the currently deployed contract

### updateAuth(permissionName: string, parentPermissionName: string, auth:[TAuthority](./types.md#tauthority)): [Account](./account.md)

Updates account's authorization.

## Fields

### accountName: string

Account's on-chain name

### contract: [Contract](./contract.md)

Account's contract object
