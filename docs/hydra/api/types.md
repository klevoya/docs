---
title: Types
---


## TAuthority

```typescript
type TAuthority = {
  threshold: number;
  keys: { key: string; weight: number }[];
  accounts: {
    permission: { actor: string; permission: string };
    weight: number;
  }[];
  waits: { wait_sec: number; weight: number }[];
};
```

## TActionAuthorization

```typescript
type TActionAuthorization = {
  actor: string;
  permission: string;
};
```

## TTransaction

```typescript
export type TTransaction = {
  actions: {
    account: string;
    name: string;
    authorization: TActionAuthorization[];
    data: any;
  }[]
};
```

## TTransactionTrace

```typescript
type TTransactionTrace = {
  id: string;
  block_num: number;
  block_time: string; // "2000-01-01T00:00:00.000"
  elapsed: number;
  net_usage: number;
  scheduled: boolean;
  action_traces: TActionTrace[];
  failed_dtrx_trace: any;
};

type TActionTrace = {
  action_ordinal: number;
  creator_action_ordinal: number;
  closest_unnotified_ancestor_action_ordinal: number;
  receipt: {
    receiver: string;
    act_digest: string;
    global_sequence: string;
    recv_sequence: string;
    auth_sequence: [string, number][];
    code_sequence: string;
    abi_sequence: number;
  };
  receiver: string;
  act: {
    account: string;
    name: string;
    authorization: { actor: string; permission: string }[];
    data: string;
  };
  context_free: boolean;
  elapsed: number;
  console: string;
  trx_id: string;
  block_num: number;
  block_time: string; // "2000-01-01T00:00:00.000";
  account_ram_deltas: any[];
};
```

## TDeferredTransaction

```typescript
type TDeferredTransaction = {
  sender: string;
  sender_id: string;
  payer: string;
  expiration: string;
  ref_block_num: number;
  ref_block_prefix: number;
  max_net_usage_words: number;
  max_cpu_usage_ms: number;
  delay_sec: number;
  context_free_actions: any[];
  actions: TTransaction["actions"];
  transaction_extensions: any[];
};
```

## THydraConfig

```typescript
type TContractObject = {
  name: string;
  wasm: string;
  abi: string;
  fixturesDir?: string;
};

type THydraConfigOptions = {
  serverBaseUrl?: string;
  skipAuth?: boolean;
};

type THydraConfig = {
  contracts: { [key: string]: TContractObject };
  options: THydraConfigOptions;
};
```

## TProtocolFeatures

```typescript
// enabled by default
"PREACTIVATE_FEATURE"
"ONLY_BILL_FIRST_AUTHORIZER"
"DISALLOW_EMPTY_PRODUCER_SCHEDULE"
"ONLY_LINK_TO_EXISTING_PERMISSION"
"FIX_LINKAUTH_RESTRICTION"
"RAM_RESTRICTIONS"
// disabled by default
"REPLACE_DEFERRED"
"NO_DUPLICATE_DEFERRED_ID"
"RESTRICT_ACTION_TO_SELF"
"FORWARD_SETCODE"
"GET_SENDER"
"WEBAUTHN_KEY"
"WTMSIG_BLOCK_SIGNATURES"
```