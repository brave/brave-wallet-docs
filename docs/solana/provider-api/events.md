---
sidebar_position: 4
---

# Events

## `connect`

The provider emits `connect` with [solanaWeb3.PublicKey](https://solana-labs.github.io/solana-web3.js/v1.x/classes/PublicKey.html)
when `solana.connect` succeeds.

## `disconnect`

The provider emits `disconnect` with `undefined` when `solana.disconnect` is
called.

## `accountChanged`

The provider emits `accountChanged` when selected account changed.
1. If selected account is connected,
   [solanaWeb3.PublicKey](https://solana-labs.github.io/solana-web3.js/v1.x/classes/PublicKey.html)
   will be emitted.
2. If selected account is deleted or disconnected, `null` will be emitted.
