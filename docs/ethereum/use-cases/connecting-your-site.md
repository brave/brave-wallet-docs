---
sidebar_position: 2
---

# Connecting your site

import Connect from '../../../src/components/connect'

Websites can call:

```ts
async function connectSite() {
  return await window.ethereum.request({ method: 'eth_requestAccounts' })
}
console.log(await connectSite())
```

<Connect/>

to make a request for permissions to an account.

# More info
The user is asked to confirm which, if any, of the wallet's accounts should be visible to the website.
For those allowed accounts, the website will be able to see the corresponding account address.

The website will also be able to ask the user to approve (sign / send) transactions and to sign data.
Signing transactions and messages require separate user confirmations after the initial account approval.

Permissions can be revoked in `brave://settings/content/ethereum`.
A user can also open up the wallet panel and disconnect a connected site when they are on that site.

Starting in Brave 1.95, if a wallet is not yet setup then `window.ethereum` is `undefined`, so a site cannot request permissions at all and cannot prompt the user to set up the wallet. Sites should [detect the provider](/ethereum/wallet-detection) before calling it. Before Brave 1.95, requesting permissions without a wallet setup would open `brave://wallet` for the user to setup the wallet.

# Brave logos

<a href='https://brave.com/static-assets/files/Brave-Logo-Package.zip'>Download Brave logo package</a>
