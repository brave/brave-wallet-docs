---
sidebar_position: 6
---

# Switching to EVM compatible chains

Websites can request that the browser changes to a different chain by using `wallet_switchEthereumChain`

```js
async function switchEthereumChain(chainId) {
  return await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{
      chainId
    }]
  })
}
console.log(await switchEthereumChain('0x3'))

```
