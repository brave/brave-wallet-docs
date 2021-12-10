---
sidebar_position: 2
---

# Methods

## `ethereum.request`

```ts
interface RequestArguments {
  readonly method: string;
  readonly params?: readonly unknown[] | object;
}

Provider.request(args: RequestArguments): Promise<unknown>;
```

## `ethereum.isConnected`

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
