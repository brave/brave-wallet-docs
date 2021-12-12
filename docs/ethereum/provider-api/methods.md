---
sidebar_position: 2
---

# Methods

## `ethereum.request`

`ethereum.request` is used to submit an RPC request to the remote EVM node.  For some methods, the provider itself handles the response.

```ts
interface RequestArguments {
  readonly method: string;
  readonly params?: readonly unknown[] | object;
}

Provider.request(args: RequestArguments): Promise<unknown>;
```

The promise either resolves with a response object, or rejects with an [error](errors).

## `ethereum.isConnected`

Returns true if the page is connected to the RPC networks and is able to make RPC requests.

This method is not related to accounts and if an account has permission for the current page. For that you'd want to use `eth_accounts` to see if an account has permission or `eth_requestAccounts` to ask for permission if permission aren't currently granted.

```ts
Provider.isConnected(): boolean;
```

## `ethereum.enable` (deprecated)

Allows a website to request permissions.

This method is superseded by a `ethereum.request` with `eth_requestAccounts`.

```ts
Provider.request({ method: 'eth_requestAccounts' })
```

:::danger Deprecated API

This API is deprecated but is available in Brave Wallet.

:::


## `ethereum.sendAsync` (deprecated)

```ts
Provider.sendAsync(request: Object, callback: Function): void;
```

:::danger Deprecated API

This API is deprecated but is available in Brave Wallet.
This method is superseded by `ethereum.request`.

:::



## `ethereum.send` (deprecated)

```ts
Provider.send(...args: unknown[]): unknown;
```

:::danger Deprecated API

This API is deprecated but is available in Brave Wallet.
This method is superseded by `ethereum.request`.

:::
