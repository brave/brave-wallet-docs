---
sidebar_position: 3
---

# Sending transactions

Sites can request that a transaction be signed / sent by using the `eth_sendTransaction` method.


```js
async function sendTransaction() {
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
  const params = [{
    from,
    // Change this to a different address
    to: from,
    value: '0x16345785D8A0000'
    // data: '0x...'
    //
    // Gas propeties are not needed, but if you specify them,
    // you can use either:
    // `maxPriorityFeePerGas`
    // `maxFeePerGas`
    // or
    // `gasPrice`
  }]

  return await window.ethereum.request({
    method: 'eth_sendTransaction',
    params
  })
}
console.log(await sendTransaction())
```

For more information, see: https://eth.wiki/json-rpc/API#eth_sendtransaction
