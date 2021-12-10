---
sidebar_position: 4
---

# Signing data

Signing data can be done with:

- `eth_sign`
- `personal_sign`
- `signTypedData_v3`
- `signTypedData_v4`

Brave does not plan to implement:

- `signTypedData`
- `signTypedData_v1` (same as `signTypedData`)

These methods are part of the same draft and are superseded.

## eth_sign

The sign method computes a signature with:  

`sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))`

The added prefix prevents a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.

Note the address to sign with must be connected to the Dapp. If the wallet is locked it will ask to be unlocked first.

```js
async function sign() {
  const accounts = await window.ethereum.request({
    id: '191',
    method: 'eth_accounts',
    params: [],
  })
  if (accounts.length === 0) {
    console.log('No accounts allowed')
    return
  }
  const from = accounts[0]
  // This hex is ascii for 'hello world'
  const message = '0x68656c6c6f20776f726c64'
  const params = [from, message]
  return await window.ethereum.request({
    method: 'eth_sign',
    params
  })  
}
console.log(await sign());
```

## personal_sign

The sign method computes a signature with:  

`sign(keccak256("\x19Ethereum Signed Message:\n" + len(message) + message)))`

The added prefix prevents a malicious DApp can sign arbitrary data (e.g. transaction) and use the signature to impersonate the victim.

Note the address to sign with must be connected to the Dapp. If the wallet is locked it will ask to be unlocked first.

MetaMask shipped this method with a bug that had the params in wrong order.  For this reason MetaMask (and therefore Brave to be compatible) allows the params to be passed in the wrong order. If that is done, then Brave (as does MetaMask) tries to determine the correct ordering of the params based on trying to detect which one is an address.

```js
async function personalSign() {
  const accounts = await window.ethereum.request({
    id: '191',
    method: 'eth_accounts',
    params: [],
  })
  if (accounts.length === 0) {
    console.log('No accounts allowed')
    return
  }
  const from = accounts[0]
  // This hex is ascii for 'hello world'
  const message = '0x68656c6c6f20776f726c64'
  const params = [message, from]
  return await window.ethereum.request({
    method: 'personal_sign',
    params
  })  
}
console.log(await personalSign());
```

## signTypedData_v3

```js
async function signTypedData_v3(method, messageInput) {
  const message = {
    "types":{
      "EIP712Domain":[
        {"name":"name","type":"string"},
        {"name":"version","type":"string"},
        {"name":"chainId","type":"uint256"},
        {"name":"verifyingContract","type":"address"}],
      "Person":[
        {"name":"name","type":"string"},
        {"name":"wallet","type":"address"}],
      "Mail":[
        {"name":"from","type":"Person"},
        {"name":"to","type":"Person"},
        {"name":"contents","type":"string"}]},
      "primaryType":"Mail",
      "domain":{
        "name":"Ether Mail",
        "version":"1",
        "chainId":1,
        "verifyingContract":"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},
      "message":{
        "from":{"name":"Cow","wallet":"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"},
        "to":{"name":"Bob","wallet":"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"},
        "contents":"Hello, Bob!"
      }
    }
  const accounts = await window.ethereum.request({
    id: '191',
    method: 'eth_accounts',
    params: [],
  })
  if (accounts.length === 0) {
    console.log('No accounts allowed')
    return
  }

  const from = accounts[0]
  const params = [from, JSON.stringify(message)]
  return await window.ethereum.request({
    method: 'eth_signTypedData_v3',
    params
  })  
}
console.log(await signTypedData_v3())
```

## signTypedData_v4

```js
async function signTypedData_v4(method, messageInput) {
  const message = {
    "types":{
      "EIP712Domain":[
        {"name":"name","type":"string"},
        {"name":"version","type":"string"},
        {"name":"chainId","type":"uint256"},
        {"name":"verifyingContract","type":"address"}],
      "Person":[
        {"name":"name","type":"string"},
        {"name":"wallet","type":"address"}],
      "Mail":[
        {"name":"from","type":"Person"},
        {"name":"to","type":"Person[]"},
        {"name":"contents","type":"string"}]},
      "primaryType":"Mail",
      "domain":{
        "name":"Ether Mail",
        "version":"1",
        "chainId":1,
        "verifyingContract":"0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC"},
      "message":{
        "from":{"name":"Cow","wallet":"0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826"},
        "to": [
          {"name":"Bob","wallet":"0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB"},
          {"name":"Alice","wallet":"0xaAaAAAAaaAAAaaaAaaAaaaaAAaAaaaaAaAaaAAaA"},
        ],
        "contents":"Hello, Bob & Alice!"
      }
    }
  const accounts = await window.ethereum.request({
    id: '191',
    method: 'eth_accounts',
    params: [],
  })
  if (accounts.length === 0) {
    console.log('No accounts allowed')
    return
  }
  const from = accounts[0]
  const params = [from, JSON.stringify(message)]
  return await window.ethereum.request({
    method: 'eth_signTypedData_v4',
    params
  })  
}
console.log(await signTypedData_v4());
```
