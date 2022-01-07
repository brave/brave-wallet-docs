---
sidebar_position: 5
---

# Adding EVM compatible chains

Websites can request that alternate chains be added by using:

```js
async function addEthereumChain() {
  const params = [{
    chainId: '0x38',
    chainName: 'Binance1 Smart Chain',
    nativeCurrency: {
      name: 'BNB',
      symbol: 'BNB',
      decimals: 18
    },
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    iconUrls: [],
    blockExplorerUrls: ['https://bscscan.com/'],
  }]
  return await window.ethereum.request({ method: 'wallet_addEthereumChain', params })
}
console.log(await addEthereumChain());
```

After a chain is added, a switch request is shown to the user to switch to that site as well.
