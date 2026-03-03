---
sidebar_position: 5
---

# Errors

CIP-30 defines several error types. Errors are thrown as objects with `code` and `info` (or `message`) properties.

## APIError

General API errors use the following structure:

```ts
interface APIError {
  code: APIErrorCode;
  info: string;
}

enum APIErrorCode {
  InvalidRequest = -1,  // Inputs do not conform to spec or are invalid
  InternalError = -2,  // Error during execution
  Refused = -3,       // Request refused (e.g. wallet disconnected)
  AccountChange = -4, // Account changed; call enable() to reconnect
}
```

| Code | Name          | Description                                                |
| ---- | ------------- | ---------------------------------------------------------- |
| -1   | InvalidRequest | Inputs do not conform to this spec or are otherwise invalid. |
| -2   | InternalError | An error occurred during execution of this API call.       |
| -3   | Refused       | The request was refused due to lack of access.             |
| -4   | AccountChange | The account has changed. Call `enable()` to reconnect.     |

## DataSignError

Returned when `signData` fails:

```ts
interface DataSignError {
  code: 1 | 2 | 3;
  info: string;
}
```

| Code | Name            | Description                                                       |
| ---- | --------------- | ----------------------------------------------------------------- |
| 1    | ProofGeneration | Wallet could not sign (e.g. does not have the secret key).        |
| 2    | AddressNotPK    | Address was not a P2PK address (no SK associated).                |
| 3    | UserDeclined    | User declined to sign the data.                                   |

## TxSignError

Returned when `signTx` fails:

```ts
interface TxSignError {
  code: 1 | 2;
  info: string;
}
```

| Code | Name            | Description                                                       |
| ---- | --------------- | ----------------------------------------------------------------- |
| 1    | ProofGeneration | Wallet was unable to sign (e.g. missing private keys).            |
| 2    | UserDeclined    | User declined to sign the transaction.                             |

## TxSendError

Returned when `submitTx` fails:

```ts
interface TxSendError {
  code: 1 | 2;
  info: string;
}
```

| Code | Name    | Description                                    |
| ---- | ------- | ---------------------------------------------- |
| 1    | Refused | Wallet refuses to send (e.g. rate limiting).   |
| 2    | Failure | Wallet could not send (e.g. signature checks). |

## PaginateError

Returned when pagination parameters exceed wallet limits:

```ts
interface PaginateError {
  maxSize: number;
}
```

`maxSize` is the maximum allowed page size. Requests outside this boundary will throw this error.
