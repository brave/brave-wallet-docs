---
sidebar_position: 1
---

# Brave Wallet detection

## Compatability with Phantom

Since Brave Wallet aims to be compatible with Phantom's exposed API, we set `window.braveSolana.isPhantom` to `true`.
Also `window.solana` is an alias of `window.braveSolana`.

## Synchronous detection

```js
const isBraveWallet = window.braveSolana.isBraveWallet
console.log('Brave Wallet: ', isBraveWallet)
```

## Wallet adapter
Brave Wallet has its own
[BraveWalletAdapter](https://github.com/solana-labs/wallet-adapter/tree/master/packages/wallets/brave)
and also compatible with
[PhantomWalletAdapter](https://github.com/solana-labs/wallet-adapter/tree/master/packages/wallets/phantom).
Examples can be found [here](https://github.com/solana-labs/wallet-adapter).

Here is how to add Brave Wallet into example code
```diff
diff --git a/packages/starter/example/components/ContextProvider.tsx b/packages/starter/example/components/ContextProvider.tsx
index 8b35f473..28398e46 100644
--- a/packages/starter/example/components/ContextProvider.tsx
+++ b/packages/starter/example/components/ContextProvider.tsx
@@ -6,7 +6,7 @@ import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
 import { WalletDialogProvider as MaterialUIWalletDialogProvider } from '@solana/wallet-adapter-material-ui';
 import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
 import { WalletModalProvider as ReactUIWalletModalProvider } from '@solana/wallet-adapter-react-ui';
-import { FakeWalletAdapter } from '@solana/wallet-adapter-wallets';
+import { BraveWalletAdapter } from '@solana/wallet-adapter-wallets';
 import { clusterApiUrl } from '@solana/web3.js';
 import { SnackbarProvider, useSnackbar } from 'notistack';
 import type { FC, ReactNode } from 'react';
@@ -67,7 +67,7 @@ const WalletContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
              * will be compiled into your application, and only the dependencies of wallets that
              * your users connect to will be loaded.
              */
-            new FakeWalletAdapter(),
+            new BraveWalletAdapter(),
         ],
         []
     );
```
