---
sidebar_position: 4
---

# Brave Wallet detection

We recommend that Dapps use a Brave Wallet button and that they treat Brave Wallet like MetaMask. 

## Compatibility with MetaMask

Since Brave Wallet aims to be compatible with MetaMask's exposed API, we set `window.ethereum.isMetaMask` to `true`.

## Brave Wallet Provider injection & detection via library

Check out these open-source libraries for off-the-shelf solutions

- [Web3-Onboard](https://github.com/blocknative/web3-onboard)
- [wagmi](https://github.com/tmm/wagmi)


## No provider until a wallet is created

Starting in Brave 1.95, `window.ethereum` (and `window.braveEthereum`) is `undefined` until the user has created a Brave Wallet, and a site has no way to prompt them to create one. A missing provider therefore means "no wallet created yet", not "not Brave" — see [restrictions for providers](/provider-availability).

Because of this, detection must not assume `window.ethereum` exists. The examples below use optional chaining accordingly.

## Synchronous detection

```js
const isBraveWallet = window.ethereum?.isBraveWallet === true
console.log('Brave Wallet: ', isBraveWallet)
```

## Asynchronous detection using `web3_clientVersion`

```js
const isBraveWallet = await window.ethereum?.request({
    method: 'web3_clientVersion'
  }).then((clientVersion) => {
    return clientVersion.split('/')[0] === 'BraveWallet'
  })
console.log('Brave Wallet: ', isBraveWallet === true)
```

Or:

```js
const isBraveWallet = await window.ethereum?.request({
    method: 'web3_clientVersion'
  }).then((clientVersion) => {
    return window.ethereum.isMetaMask && clientVersion.split('/')[0] !== 'MetaMask'
  })
console.log('Brave Wallet: ', isBraveWallet === true)
```
