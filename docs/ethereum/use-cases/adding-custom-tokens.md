---
sidebar_position: 7
---

# Adding custom tokens

[EIP-747](https://eips.ethereum.org/EIPS/eip-747) allows Dapps to request that a token be added.

```js
async function addAsset() {
  return await ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: '0xb60e8dd61c5d32be8058bb8eb970870f07233155',
        symbol: 'FOO',
        decimals: 18,
        image: 'https://foo.io/token-image.svg',
      },
    },
  })
}
console.log(await addAsset())
```
