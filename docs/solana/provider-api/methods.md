---
sidebar_position: 2
---

# Methods

## `solana.connect`

`solana.connect` is required before calling other methods. First time calling
connect will prompt users to grant permission for current selected account and
the permission will be stored in `brave://settings/content/solana`. Subsequent
calls won't ask for permission again if granted permission is still in
content settings. Note that having granted permission doesn't mean a dApp
is connected, a website still need to call `solana.connect` when disconnected.

```ts
interface ConnectOptions {
  // Eagerly connect
  onlyIfTrusted?: boolean
}
solana.connect(options?: ConnectOptions) : Promise<solanaWeb3.PublicKey>
```

When a connect succeeds,
[solanaWeb3.PublicKey](https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html)
object will be returned, otherwise the promise will be rejected with error.

Example:
```ts
const result = await window.solana.connect();
// BrG44HdsEhzapvs8bEqzvkq4egwevS3fRE6ze2ENo6S8
console.log(result.publicKey.ToString());
```

### Eagerly connect
```ts
// eagerly connect
solana.connect({ onlyIfTrusted: true }) : Promise<solanaWeb3.PublicKey>
```
When an optional `{ onlyIfTrusted: true }` is provided, that means a website
wants to eagerly connect, which means connect request will be rejected
automatically when it doesn't have previously granted permission or the wallet
is locked.

## `solana.disconnect`

`solana.disconnect` will set state of the site to be disconnected for the
selected account. Note that it won't remove the granted permission in content
settings.
```ts
solana.disconnect() : Promis<undefined>
```

## `solana.signAndSendTransaction`

This API will sign the transaction with private key of the selected account and
submit it using Solana JSON RPC. It takes a
[solanaWeb3.Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html)
and an optional [solanaWeb3.SendOptions](https://solana-labs.github.io/solana-web3.js/modules.html#SendOptions) parameter
, and return a promise containing a public key and a signature.

```ts
interface SendOptions = {
  /** disable transaction verification step */
  skipPreflight?: boolean,
  /** preflight commitment level */
  preflightCommitment?: string, // 'processed' | 'confirmed' | 'finalized'
  /** Maximum number of times for the RPC node to retry sending the
    transaction to the leader. */
  maxRetries?: number;
}
solana.signAndSendTransaction(solanaWeb3.Transaction, options?: SendOptions)
 : Promise<{publicKey: <base58 encoded string>,
            signature: <base58 encoded string>}>
```
Example:
```ts
const NETWORK = clusterApiUrl("testnet");
const connection = new Connection(NETWORK);
const transaction = new Transaction();
try {
  const result = await window.solana.signAndSendTransaction(transaction,
      {maxRetries: 5, preflightCommitment: 'finalized', skipPreflight: false} // optional
      );
  // BrG44HdsEhzapvs8bEqzvkq4egwevS3fRE6ze2ENo6S8
  console.log(result.publicKey);
  await connection.confirmTransaction(result.signature);
} catch (err) {
  // { code: 4001, message: 'User rejected the request.' }
}
```

## `solana.signTransaction` (deprecated)

This API allows a website to sign a transaction and submit it later.
It takes a
[solanaWeb3.Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html)
and return a promise containing a
[solanaWeb3.Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html)

```ts
solana.signTransaction(solanaWeb3.Transaction) : Promise<solanaWeb3.Transaction>
```
Example:
```ts
const NETWORK = clusterApiUrl("testnet");
const connection = new Connection(NETWORK);
const transaction = new Transaction();
try {
  const signedTransaction = await window.solana.signTransaction(transaction);
  const signature = await connection.sendRawTransaction(signedTransaction.serialize());
} catch (err) {
  // { code: 4001, message: 'User rejected the request.' }
}
```

:::danger Deprecated API

This API is deprecated but is available in Brave Wallet.

:::

## `solana.signAllTransactions` (deprecated)

This API allows a website to sign some transactions and submit them later.
It takes an array of
[solanaWeb3.Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html)
and return a promise containing an array of
[solanaWeb3.Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html)

```ts
solana.signTransaction(solanaWeb3.Transaction[]) : Promise<solanaWeb3.Transaction[]>
```
Example:
```ts
const NETWORK = clusterApiUrl("testnet");
const connection = new Connection(NETWORK);
const transaction1 = new Transaction();
const transaction2 = new Transaction();
try {
  const signedTransactions = await window.solana.signTransaction([transaction1, transaction2]);
  signedTransactions.forEach(signedTransaction => {
    const signature = await connection.sendRawTransaction(signedTransaction.serialize())});
} catch (err) {
  // { code: 4001, message: 'User rejected the request.' }
}
```
:::danger Deprecated API

This API is deprecated but is available in Brave Wallet.

:::

## `solana.signMessage`

Allows a website to sign a message using the selected account. If we detect the
message payload to be signed is a transaction, we will reject the request
automatically.
This API takes **Uint8Array** with an optional encoding (**hex** or **utf8**) to
display the message to users. If a caller doesn't specify encoding, default
would be utf8.

```ts
solana.signMessage(Uint8Array, string?) : Promise({ publicKey: <solanaWeb3.PublicKey>,
                                                    signature: <Uint8Array> })
 ```

 Example:
 ```ts
 const encodedMessage = new TextEncoder().encode('signMessage test');
 // signedMessage1 === signedMessage2 === signedMessage3
 const signedMessage1 = await window.solana.signMessage(encodedMessage);
 const signedMessage2 = await window.solana.signMessage(encodedMessage, "utf8");
 const signedMessage2 = await window.solana.signMessage(encodedMessage, "hex");
 ```

## `solana.request`

The `request` API allow a website to call above methods with a universal
interface. Note input and output might be different for some methods,
ex. signTransaction.

```ts
solana.request({ method: <string>,
                 parms: {...}}) : Promise<{...}>
```

### `connect`
`params` is optional for connect.

```ts
solana.request({ method: "connect" })
 : Promise<{ publicKey: solanaWeb3.PublicKey}>
// eagerly connect
solana.request({ method: "connect", params: { onlyIfTrusted : true }})
 : Promise<{ publicKey: solanaWeb3.PublicKey}>
```

### `disconnect`
disconnect does not need `params`
```ts
solana.request({ method: "disconnect" }) : Promise<{}>
```

### `signAndSendTransaction`
`params` is required and websites must specify base58 encode of
`serializeMessage` of [solanaWeb3.Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html).
Optional `options` of type [solanaWeb3.SendOptions](https://solana-labs.github.io/solana-web3.js/modules.html#SendOptions) can be specified in `param`.
`signature` in return promise is base58 encoded signature, it is also the
confirmed block hash.

```ts
solana.request({method: "signAndSendTransaction",
                params: { message: <base58 encoded string> }})
 : Promise<{ publicKey: <base58 encoded string>,
             signature: <base58 encoded string>}>
```
Example
```ts
const bs58 = require("bs58");
const NETWORK = clusterApiUrl("testnet");
const connection = new Connection(NETWORK);
const transaction = new Transaction();
try {
  const result = await window.solana.request({
    method: "signAndSendTransaction",
    params: {
      message: bs58.encode(transaction.serializeMessage()),
      options: {maxRetries: 5, preflightCommitment: 'finalized', skipPreflight: false}  // optional
    }
  });
  // BrG44HdsEhzapvs8bEqzvkq4egwevS3fRE6ze2ENo6S8
  console.log(result.publicKey);
  await connection.confirmTransaction(result.signature);
} catch (err) {
  // { code: 4001, message: 'User rejected the request.' }
}
```

### `signTransaction` (deprecated)
`params` is required and websites must specify base58 encode of
`serializeMessage` of [solanaWeb3.Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html).
`signature` in return promise is base58 encoded signature.

```ts
solana.request({method: "signTransaction",
                params: { message: <base58 encoded string> }})
 : Promise<{ publicKey: <base58 encoded string>,
             signature: <base58 encoded string> }>
```
Example:
```ts
const bs58 = require("bs58");
const NETWORK = clusterApiUrl("testnet");
const connection = new Connection(NETWORK);
const transaction = new Transaction();
try {
  const signedTransaction = await window.solana.request({
    method: "signTransaction"
    params: { message: bs58.encode(transaction.serializeMessage()) }
  });
  console.log('signature: ' + signedTransaction.signature);
} catch (err) {
  // { code: 4001, message: 'User rejected the request.' }
}
```
:::danger Deprecated API

This API is deprecated but is available in Brave Wallet.

:::

### `signAllTransactions` (deprecated)
`params` is required and websites must specify an array of base58 encode of
`serializeMessage` of [solanaWeb3.Transaction](https://solana-labs.github.io/solana-web3.js/classes/Transaction.html).
`signature` in return promise is an array of base58 encoded signatures.
Note that all of the transacion must be the same signer, otherwise request will
be rejected.

```ts
solana.request({method: "signAllTransactions",
                params: { message: <base58 encoded string>[] }})
 : Promise<{ publicKey: <base58 encoded string>,
             signature: <base58 encoded string>[] }>
```
Example:
```ts
const bs58 = require("bs58");
const NETWORK = clusterApiUrl("testnet");
const connection = new Connection(NETWORK);
const transaction1 = new Transaction();
const transaction2 = new Transaction();
const transactions = [transaction1, transaction2];
const message = transactions.map((transaction) => {
    return bs58.encode(transaction.serializeMessage());
});
try {
  const signedTransactions = await window.solana.request({
    method: "signAllTransactions"
    params: { message }
  })
  signedTransactions.signature.forEach((signedTransaction) => {
    console.log('signature: ' + signedTransaction);
  });
} catch (err) {
  // { code: 4001, message: 'User rejected the request.' }
}
```
:::danger Deprecated API

This API is deprecated but is available in Brave Wallet.

:::

### `signMessage`
A website must specify **Uint8Array** to be signed in `message` of `params`.
`display` is optional for display encoding to users,
it only accepts **hex** or **utf8**  (default: **utf8**).
`signature` in returned promise is base58 encoded of signature byte array.

```ts
solana.request({method: "signMessage",
                params: { message: Uint8Array, params?: <string> }})
 : Promise<{ publicKey: <base58 encoded string>,
             signature: <base58 encoded string> }>
```
```ts
 const encodedMessage = new TextEncoder().encode('signMessage test')
 // signedMessage1 === signedMessage2 === signedMessage3
 const signedMessage1 = await window.solana.request({
   method: "signMessage",
   params: {message: encodedMessage}
  });
 const signedMessage2 = await window.solana.request({
   method: "signMessage",
   params: {message: encodedMessage, display: "utf8"}
  });
 const signedMessage3 = await window.solana.request({
   method: "signMessage",
   params: {message: encodedMessage, display: "hex"}
  });
 ```
