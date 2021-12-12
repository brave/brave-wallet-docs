---
sidebar_position: 5
---

# Errors

Provider errors come in the form of a `ProviderRpcError` object:

```ts
interface ProviderRpcError extends Error {
  message: string;
  code: number;
  data?: unknown;
}
```

For a full list of errors, ee [EIP-1474](https://eips.ethereum.org/EIPS/eip-1474#error-codes)