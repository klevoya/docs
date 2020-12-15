---
title: Account
---

Accounts represent EOSIO accounts and are the main form of interacting with the Hydra blockchain environment.
A contract template can be deployed on an account and used to send transactions and read table data.

Accounts are created using the [createAccount method](./blockchain.md#createaccountaccountname-stringownerauth-tauthority-activeauth-tauthority-account) of the Blockchain object.

## Methods

### setContract(contract: Contract): void

Sets contract and ABI of this account

### getTableRowsScoped(tableName: string): Dictionary<TableRowStructure[]\>

Gets the table rows of the specified table, keyed by scopes

### resetTables(...tableNames: string[]): void

Deletes this account's table data.
- The table names to delete can be passed as arguments.
- If no arguments are passed, deletes all table data of this account.

### loadFixtures(tableName?: string, fixtureScopeRowsMap?: Dictionary<TableRowStructure[]\>): Promise<void\>

Loads initial contract data defined for the currently deployed contract.
- If no arguments are defined it loads the data from the JSON fixture files.
- If `tableName` and `fixtureScopeRowsMap` are defined it will only load the table data given by the `fixtureScopeRowsMap` argument.

### updateAuth(permissionName: string, parentPermissionName: string, auth:[TAuthority](./types.md#tauthority)): [Account](./account.md)

Updates account's authorization.

## Fields

### accountName: string

Account's on-chain name

### contract: [Contract](./contract.md)

Account's contract object
