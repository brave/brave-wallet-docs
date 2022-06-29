---
sidebar_position: 5
---

# Default Wallet setting

We expose a setting in `brave://settings/wallet` to control how Brave makes the provider objects available (`window.ethereum` and `window.braveSolana` and its alias `window.solana`)

Since extensions sometimes also provide these objects, this setting will help decide which wallet handles these objects.

Here's a description of each setting:
- `Brave Wallet (Prefer extensions)` - This is the default. Brave Wallet will expose `window.ethereum` and `window.braveSolana` but allow other extensions such as MetaMask to overwrite it.
- `Brave Wallet` - Exposes `window.ethereum` and `window.braveSolana` and prevents sites and extensions from changing them.
- `Crypto Wallets (Deprecated)` - Gives access to the old deprecated wallet. This option is not compatible with other extensions such as MetaMask.
- `None` - `window.ethereum` and `window.braveSolana` will not be provided by Brave Wallet at all. If you have enabled an extension such as MetaMask, it is free to use the provider object.

After changing the default wallet, it is best to restart your browser. Why?
- If you had Crypto Wallets loaded, it won't be unloaded until the next restart. When Crypto Wallets is loaded it will not work properly with other extensions trying to access `window.ethereum`.
- Existing tabs (ones already opened) will not change to use the new wallet setting, you need a new tab or a browser restart.
