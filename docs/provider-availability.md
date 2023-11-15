---
sidebar_position: 3
---

# Restrictions for providers
The provider objects (e.g. `window.ethereum` and `window.braveSolana`) are not provided in all contexts.

Historically the web has had a notion of “powerful" APIs like geolocation and camera/microphone, which are subject to additional security restrictions. See for instance https://www.w3.org/TR/secure-contexts/. 

Because they allow websites to request access to user funds, new web3 APIs like `window.ethereum` and `window.braveSolana` are subject to the same restrictions as other powerful APIs like `geolocation` in Brave.
As a rule of thumb, if a context is not allowed to request access to geolocation, `window.ethereum` and `window.braveSolana` are `undefined` in the same contexts.

Provider objects are not accessible in private and Tor window.


## Restrictions for insecure contexts

Only “secure origins" as defined in https://www.chromium.org/Home/chromium-security/prefer-secure-origins-for-powerful-new-features/#definitions have access to `window.ethereum` and `window.braveSolana`.
This can be checked using `window.isSecureContext`, including inside iframes.
Secure contexts include sites that are served from HTTPS but also HTTP `localhost`.

## Restrictions in iframes

By default the provider objects are not exposed to 3p iframes.
Brave exposes 2 new [feature policies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy) for Ethereum and Solana named `ethereum` and `solana` respectively.

`window.ethereum` and `window.braveSolana` are blocked in an iframe if `window.isSecureContext` is `false` in that iframe.

In addition:

1. If the iframe is third party to the top-level origin, it will be blocked UNLESS the iframe has the `allow="{solana/ethereum}"` attribute (where “solana" and “ethereum" values control the corresponding API permissions). 
2. If the iframe is first party to the top-level origin AND the `sandbox` attribute is set on the iframe, it will be blocked UNLESS `sandbox="allow-same-origin"` is set. Note "allow-same-origin"` does nothing if the iframe is third-party.
3. For security-conscious users, we add a setting to block both `window.ethereum` and `window.solana` in ALL iframes, regardless of origin or attributes. This matches the default behavior on iOS.

### iOS
Currently on iOS, `window.ethereum` and `window.braveSolana` are both undefined in all iframes.

## Example cases

In all these cases, the `window.ethereum` or `window.braveSolana` request is coming from the innermost iframe.
- Top level `http://a.com` -> blocked (insecure)
- Top level `https://a.com` -> allowed
- Top level `https://a.com` with `<iframe src="http://a.com/">` -> blocked (insecure/3p)
- Top level `http://a.com` with `<iframe src="https://a.com/">` -> blocked (insecure/3p) 
- Top level `https://a.com` with `<iframe src="https://a.com">` -> allowed
- Top level `https://a.com` with `<iframe src="https://b.com">` -> blocked (3p)
- Top level `https://b.com` with `<iframe src="http://a.com/">` with `<iframe src="https://b.com">` -> blocked (insecure)
- Top level `https://b.com` with `<iframe src="https://a.com">` with `<iframe src="https://b.com">` -> blocked (3p)
- Top level `https://a.com` with `<iframe src="https://b.a.com">` -> blocked (3p)
- Top level `https://a.com` with `<iframe src="https://b.a.com" allow="ethereum">` -> ethereum allowed, solana blocked
- Top level `https://a.com` with `<iframe src="https://b.com" allow="ethereum">` -> ethereum allowed, solana blocked
- Top level `https://a.com` with `<iframe src="https://b.a.com" allow="ethereum; solana">` -> ethereum allowed, solana allowed
- Top level `https://a.com` with `<iframe src="https://a.com" sandbox>` -> blocked (sandbox)
- Top level `https://a.com` with `<iframe src="https://a.com" sandbox="allow-same-origin allow-scripts">` -> allowed (but note this case is discouraged in https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox because it’d allow the iframe to remove its own sandbox attribute)
- Top level `data://foo with <iframe src="data://bar">` -> blocked (insecure)
- Top level `file://foo with <iframe src="file://bar">` -> blocked (3p)
- Top level `https://a.com` with `<iframe src="https://b.com" sandbox="allow-same-origin allow-scripts">` -> blocked (3p)
- Top level `https://a.com` with `<iframe src="https://b.com" sandbox="allow-scripts" allow="ethereum; solana">` -> ethereum allowed, solana allowed
