---
sidebar_position: 2
---

# Methods

## `eth_sendTransaction`

## `wallet_addEthereumChain`

`wallet_addEthereumChain` accepts a single object parameter, specified by the following TypeScript interface:

```ts
interface AddEthereumChainParameter {
  chainId: string;
  blockExplorerUrls?: string[];
  chainName?: string;
  iconUrls?: string[];
  nativeCurrency?: {
    name: string;
    symbol: string;
    decimals: number;
  };
  rpcUrls?: string[];
}
```

## `wallet_switchEthereumChain`

`wallet_switchEthereumChain` accepts a single object parameter, specified by the following TypeScript interface:

```ts
interface SwitchEthereumChainParameter {
  chainId: string;
}
```


## `wallet_watchAsset`

`wallet_watchAsset` accepts a single object parameter, specified by the following TypeScript interface:

```ts
interface WatchAssetParameters {
  type: string; // The asset's interface, e.g. 'ERC20'
  options: {
    address: string; // The hexadecimal Ethereum address of the token contract
    symbol?: string; // A ticker symbol or shorthand, up to 5 alphanumerical characters
    decimals?: number; // The number of asset decimals
    image?: string; // A string url of the token logo
  };
}
```
