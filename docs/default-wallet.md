---
sidebar_position: 3
---

# Default Wallet setting

Dapps work by communicating with a special object that Brave Wallet and extensions like MetaMask provide named `window.ethereum`.
Only one wallet can provide `window.ethereum` to websites.
In Brave, we expose a setting in brave://settings/wallet to be able to change which wallet provides `window.ethereum`.

Here's a description of each setting:
- Brave Wallet (Prefer extensions) - This is the default. Brave Wallet will expose `window.ethereum` but allow other extensions such as MetaMask to overwrite it.
- Brave Wallet - Exposes `window.ethereum` and prevents sites and extensions from changing `window.ethereum`.
- Crypto Wallets (Deprecated) - Gives access to the old deprecated wallet. This option is not compatible with other extensions such as MetaMask.
- None - `window.ethereum` will not be provided by Brave Wallet at all. If you have extensions such as MetaMask, is is free to use `window.ethereum`.

After changing the default wallet, it is best to restart your browser. Why?
- If you had Crypto Wallets loaded, it won't be unloaded until the next restart. When Crypto Wallets is loaded it will not work properly with other extensions trying to access `window.ethereum`.
- Existing already opened tabs will not change to use the new wallet setting, you need a new tab or a browser restart.
