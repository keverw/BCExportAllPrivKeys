# BCExportAllPrivKeys

This is a small script I wrote to export all the private keys from Bitcoin Core to a text file with 1 private key per line. This is written using Node.js, so you'll want to have `node` and `npm` installed to use this script, along with Bitcoin Core.

This uses RPC, so in your `bitcoin.conf` make sure you have:

```
server=1
rpcuser=bitcoinrpc
rpcpassword=somepassword
rpctimeout=30
```
After you edit that, make sure to restart Bitcoin Core.

Then download this repo, `cd` into it in your terminal or command prompt. Then do `npm install` to download the dependencies.

You also need to open `export.js` and edit `password` to match the RPC password you set, and `walletPassword` set to your passphrase or leave it blank if none set. Then once everything is installed and you are done changing config options then run `node export.js` and in the same folder once it finishes up you'll have a `keys.txt` file with one private key per line. Once done, I recommend disabling RPC by undoing what was added to `bitcoin.conf` and then restarting Bitcoin core.

If this script was any help to you, feel free to donate BTC to me `12ASN4Rb4hDnzbjaQqdmK8MzRQcCiTDVBi`.
