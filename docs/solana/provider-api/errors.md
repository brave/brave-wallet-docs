---
sidebar_position: 5
---

# Errors

Provider errors come in the form of a `ProviderRpcError` object:

```ts
interface ProviderRpcError extends Error {
code: number;
message: string;
}
```
Here is the list of errors:

| Code      | Name                  | Message                                                                  |
| --------- | --------------------- | ------------------------------------------------------------------------ |
| 4001      | User Rejected Request | The user rejected the request                                            |
| 4100      | Unauthorized          | The requested method and/or account has not been authorized by the user. |
| -32601    | Method Not Found      | Brave wallet does not recognize the method.                              |
| -32603    | Interal Error         | An internal error has occurred.                                          |
| -32700    | Parsing Error         | Invalid JSON.                                                            |

