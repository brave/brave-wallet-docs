---
sidebar_position: 3
---

# Events

## `connect`

The Provider emits connect when it:

- first connects to a chain after being initialized.
- first connects to a chain, after the disconnect event was emitted.

```ts
interface ProviderConnectInfo {
  readonly chainId: string;
}
```

```ts
Provider.on('connect', listener: (connectInfo: ProviderConnectInfo) => void): Provider;
```

## `disconnect`

The Provider emits disconnect when it becomes disconnected from all chains.

```ts
Provider.on('disconnect', listener: (error: ProviderRpcError) => void): Provider;
```

## `chainChanged`

The Provider emits chainChanged when connecting to a new chain.

```ts
Provider.on('chainChanged', listener: (chainId: string) => void): Provider;
```

## `accountsChanged`

The Provider emits accountsChanged if the accounts returned from the Provider (eth_accounts) change.

```ts
Provider.on('accountsChanged', listener: (accounts: string[]) => void): Provider;
```

## `message`

The `message` event is fired for `eth_subscribe` subscription results.

Other types of events are possible in the future, so be sure to check the `type` property.

The event will be emitted with an object argument of the following form:

```ts
interface ProviderMessage {
  readonly type: string;
  readonly data: unknown;
}
```

## `close` (deprecated)

Not yet implemented, but Brave may implement it.
This event `close` is superseded by `disconnect`.

:::danger Deprecated API

This API is deprecated and not available in Brave Wallet.

:::


## `networkChanged` (deprecated)

Not yet implemented, but Brave may implement it for webcompat reasons.

The event `networkChanged` is superseded by `chainChanged`.

:::danger Deprecated API

This API is deprecated and not available in Brave Wallet.

:::
