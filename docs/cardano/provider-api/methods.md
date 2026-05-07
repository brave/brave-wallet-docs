---
sidebar_position: 2
---

# Methods

## `cardano.brave.enable`

The entry point to start communication with the user's wallet. The wallet requests the user's permission to connect. If permission is granted, the full API object is returned.

```ts
cardano.brave.enable(options?: { extensions?: { cip: number }[] }) : Promise<API>
```

Brave Wallet does not accept extension arguments; the `options` parameter is ignored. If the wallet is already connected, this function should not request access again and instead return the API object immediately.

Example:

```js
const api = await window.cardano.brave.enable();
const networkId = await api.getNetworkId();
const balance = await api.getBalance();
```

## `cardano.brave.isEnabled`

Returns whether the dApp is already connected to the user's wallet, or if requesting access would succeed without user confirmation (e.g. the dApp is whitelisted).

```ts
cardano.brave.isEnabled() : Promise<boolean>
```

---

## Full API (returned from `enable()`)

Once connected, the returned `api` object provides the following methods.

### `api.getExtensions`

Returns the list of extensions enabled by the wallet. Brave Wallet always returns an empty array. Extensions are not accepted in the `enable()` arguments.

### `api.getNetworkId`

Returns the network ID of the currently connected account. `0` is testnet, `1` is mainnet.

```ts
api.getNetworkId() : Promise<number>
```

### `api.getUtxos`

Returns UTXOs (unspent transaction outputs) controlled by the wallet. If `amount` is provided, returns only the UTXOs needed to reach that value target, or `null` if unattainable. Supports optional pagination.

```ts
api.getUtxos(amount?: string, paginate?: { page: number; limit: number }) : Promise<string[] | null>
```

### `api.getBalance`

Returns the total balance available in the wallet.

```ts
api.getBalance() : Promise<string>
```

### `api.getUsedAddresses`

Returns a list of all used addresses controlled by the wallet. Supports optional pagination.

```ts
api.getUsedAddresses(paginate?: { page: number; limit: number }) : Promise<string[]>
```

### `api.getUnusedAddresses`

Returns a list of unused addresses controlled by the wallet.

```ts
api.getUnusedAddresses() : Promise<string[]>
```

### `api.getChangeAddress`

Returns an address owned by the wallet that should be used as a change address (or as a generic receive address).

```ts
api.getChangeAddress() : Promise<string>
```

### `api.getRewardAddresses`

Returns the reward addresses owned by the wallet.

```ts
api.getRewardAddresses() : Promise<string[]>
```

### `api.signTx`

Requests the user to sign the unsigned portions of a transaction. The wallet prompts for permission and returns a witness set.

```ts
api.signTx(tx: string, partialSign?: boolean) : Promise<string>
```

- `tx`: Hex-encoded CBOR of the transaction
- `partialSign`: If `true`, the wallet signs only what it can

### `api.signData`

Requests the user to sign arbitrary data using the CIP-8 signing spec. Uses the payment key from the given address.

```ts
api.signData(addr: string, payload: string) : Promise<{ signature: string; key: string }>
```

### `api.submitTx`

Requests that a signed transaction be submitted through the wallet. Returns the transaction hash on success.

```ts
api.submitTx(tx: string) : Promise<string>
```

---

## Not supported

- **`api.getRewardAddresses`** 
