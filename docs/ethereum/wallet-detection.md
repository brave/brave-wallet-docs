---
sidebar_position: 4
---

# Brave Wallet detection

We recommend that Dapps use a Brave Wallet button and that they treat Brave Wallet like MetaMask. 

[Web3Modal](https://github.com/Web3Modal/web3modal) is a useful library for handling this for you.

## Compatibility with MetaMask

Since Brave Wallet aims to be compatible with MetaMask's exposed API, we set `window.ethereum.isMetaMask` to `true`.

## Brave Wallet Provider injection & detection via library

Check out these open-source libraries for off-the-shelf solutions

- [Web3Modal](https://github.com/Web3Modal/web3modal)
- [Web3-Onboard](https://github.com/blocknative/web3-onboard)
- [wagmi](https://github.com/tmm/wagmi)


## Synchronous detection

```js
const isBraveWallet = window.ethereum.isBraveWallet
console.log('Brave Wallet: ', isBraveWallet)
```

## Asynchronous detection using `web3_clientVersion`

```js
const isBraveWallet = await window.ethereum.request({
    method: 'web3_clientVersion'
  }).then((clientVersion) => {
    return clientVersion.split('/')[0] === 'BraveWallet'
  })
console.log('Brave Wallet: ', isBraveWallet)
```

Or:

```js
const isBraveWallet = await window.ethereum.request({
    method: 'web3_clientVersion'
  }).then((clientVersion) => {
    return window.ethereum.isMetaMask && clientVersion.split('/')[0] !== 'MetaMask'
  })
console.log('Brave Wallet: ', isBraveWallet)
```
