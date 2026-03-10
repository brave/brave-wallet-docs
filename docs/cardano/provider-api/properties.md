---
sidebar_position: 3
---

# Properties

## `cardano.brave.name`

A string name for the wallet that can be used inside the dApp when asking the user which wallet they would like to connect with.

## `cardano.brave.icon`

A URI (e.g. data URI base64 or other) for use as an `img` src. Can be displayed in the dApp when presenting wallet connection options to the user.

## `cardano.brave.apiVersion`

The version number of the CIP-30 API that the wallet supports. Set to `"1"` for wallets implementing the base specification.

## `cardano.brave.supportedExtensions`

An array of extensions supported by the wallet. Each extension is an object with a `cip` field (integer) describing the CIP number. For example: `[{ "cip": 30 }]`. This informs dApps which extensions can be requested when calling `enable()`.
