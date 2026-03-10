---
sidebar_position: 4
---

# Events

CIP-30 does not define a standard event emitter for the wallet interface. Account and network changes are communicated differently than in Ethereum or Solana providers.

## Account changes

When the user switches accounts in the wallet, subsequent API calls may fail with an `APIError` where `code` is `AccountChange` (`-4`). When this occurs, the dApp should call `cardano.brave.enable()` again to reestablish the connection to the new account. The wallet should not ask for confirmation in this case, since the user initiated the account change.

```js
try {
  const balance = await api.getBalance();
} catch (err) {
  if (err.code === -4) {
    // Account changed - re-enable to connect to new account
    const api = await window.cardano.brave.enable();
  }
}
```
