---
title: Accessing Contract Prints
---

For debugging purposes one can add `eosio::print` instructions to a contract.
These printed messages can be read in Hydra by accessing the [transaction trace object](../api/types.md#ttransactiontrace) that is returned when executing transactions on the [account contract object](../api/contract.md).

## Reading contract console prints

For a given contract with a `hello` action that prints the username a test could be written as follows:

```cpp
ACTION hello(name user) {
  print("Hello ", user, "!");
}
```

```js
it("prints the correct message", async () => {
  expect.assertions(1);

  const txTrace = await tester.contract.hello({
    user: `bob`,
  });

  // get all print output from the first action ('hello' action)
  const consoleOutput = txTrace.action_traces[0].console;

  expect(consoleOutput).toBe("Hello bob!");
});
```

Printing the contract console output to the test runner output is done by using JavaScript's `console.log` function:

```js
it("prints the correct message", async () => {
  expect.assertions(1);

  const txTrace = await tester.contract.transfer(
    {
      from: `alice`,
      to: `bob`,
      quantity: `100.0000 EOS`,
      memo: ``,
    },
    [{ actor: `alice`, permission: `active` }]
  );

  // get all print output from the transfer action and its created notifications
  const consoleOutput = txTrace.action_traces.map((t) => t.console).join(``);

  // print it to test runner's stdout
  console.log(consoleOutput);
  // ...
});
```

:::note Console prints are recorded per action
There is no single console output for a transaction, instead, each action carries its own console output in the corresponding action trace.
Make sure to access the correct action trace when dealing with inline actions or notifications to other contracts.
For example, when transferring tokens using the `eosio.token` contract three action traces are created, one for the initial action on the `eosio.token` contract and two for the notifications sent to the sender and receiver.
:::
