# BCExportAllPrivKeys

Small little script I wrote to export all the private keys from Bitcoin Core to a text file with 1 private key per line.

This uses RPC, so in your `bitcoin.conf` make sure you have:

```
server=1
rpcuser=bitcoinrpc
rpcpassword=somepassword
rpctimeout=30
```

Then download this repo, `cd` into it in your terminal or command prompt. Then do `npm install` to download the dependencies.

You also need to open `export.js` and edit `password` to match the RPC password you set, and `walletPassword` set to your passphase or leave it blank if none set. Then once everything is installed and you done changing config options then run `node export.js` and in the same folder once it finshes up you'll have a `keys.txt` file with one priviate key per line.

If this script was any help to you, feel free to donate BTC to me `12ASN4Rb4hDnzbjaQqdmK8MzRQcCiTDVBi`.
