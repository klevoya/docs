---
title: Types
hideInSidebar: true
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