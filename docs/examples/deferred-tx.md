---
title: Deferred Transactions
---

On real EOSIO networks, when a smart contract schedules a deferred transaction, it might or might not be picked up and executed by a block producing node after the specified delay.
This non-determinism is not desirable for testing, therefore, the deferred transaction model in Hydra is different: Deferred transaction are recorded, but not automatically executed. They can be manually executed at any time disregarding their specified delay.

```js
let blockchain = new Blockchain(config);
let tester = blockchain.createAccount(`tester`);
tester.setContract(blockchain.contractTemplates[`deferredtx`]);

test(async () => {
  // assume the schedule action of the contract schedules a deferred tx
  await tester.contract.schedule();

  let deferredTransactions = blockchain.getDeferredTransactions();

  expect(deferredTransactions).toMatchObject([
    {
      actions: [
        {
          account: "tester",
          name: "scheduledef",
          authorization: [
            {
              actor: "tester",
              permission: "active"
            }
          ],
          data: {
            from_contract: "tester",
            value: "1"
          }
        }
      ],
      delay_sec: 1
    }
  ]);

  // deferred transactions are like standard transactions
  // and can be executed using the sendTransaction method
  await blockchain.sendTransaction(deferredTransactions[0]);
  deferredTransactions = blockchain.getDeferredTransactions();
  // when a deferred transaction is executed, it is **not** cleared
  expect(deferredTransactions.length).toBe(2);

  // deferred transactions must be cleared manually
  blockchain.clearDeferredTransactions();
  deferredTransactions = blockchain.getDeferredTransactions();
  expect(deferredTransactions.length).toBe(0);
});
```
