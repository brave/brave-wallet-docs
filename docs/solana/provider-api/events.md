---
sidebar_position: 3
---

# Events

## `connect`

The provider emits `connect` with [solanaWeb3.PublicKey](https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html)
when `solana.connect` succeeds.

## `disconnect`

The provider emits `disconnect` with `undefined` when `solana.disconnect` is
called.

## `accountChanged`

The provider emits `accountChanged` when selected account changed
1. If newly selected account is connected,
   [solanaWeb3.PublicKey](https://solana-labs.github.io/solana-web3.js/classes/PublicKey.html)
   will be emitted
2. If newly selected account is disconnected, `null` will be emitted
