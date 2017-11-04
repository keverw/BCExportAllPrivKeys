# BCExportAllPrivKeys

This is a small script I wrote to export all the private keys from Bitcoin Core to a text file with 1 private key per line.

This script is useful to export your keys when switching to another wallet you trust or needing them to claim your Bitcoin Cash. I'd, however, recommend exporting your keys, and then sending your Bitcoin to another Bitcoin address you control to be extra safe without sharing that key with another wallet.

This is written using Node.js, so you'll want to have both `node` and `npm` installed to use this script, along with Bitcoin Core. I assume you already have Bitcoin Core installed, but if you are new to Node.js visit https://nodejs.org/en/ to download `node` and `npm` for Mac or Windows and follow the simple step by step installer. On Linux, these are usually in your package manager.

## Step 1 - Enable RPC:

### 1.1 - Visit your Bitcoin Core Location

| System                   | Path                                     |
| ------------------------ | ---------------------------------------- |
| **Windows XP**           | `C:\Documents and Settings\<username>\Application Data\Bitcoin` |
| **Windows Vista, 7, 10** | `C:\Users\<username>\AppData\Roaming\Bitcoin` |
| **macOS**                | `/Users/<username>/Library/Application Support/Bitcoin` |
| **Linux**                | `/home/<username>/.bitcoin`              |

You would substitute `<username>` for your actual username.

### 1.2 - Create or edit your bitcoin.conf

If you don't have a `bitcoin.conf` file, create one here. Make sure it's named exactly as listed here and make sure no `.txt` is on the end. If you create a text file on some system, `.txt` will be automatically added so make sure you have your system show file extensions, even known ones too. If you are unsure on this, do a search as it is different depending on every system.

* If starting fresh, you can just copy my example `bitcoin.conf` the file below.
* If you already have a `bitcoin.conf`, you can modify it to have these parameters listed below in my example

```
server=1
rpcuser=bitcoinrpc
rpcpassword=somepassword
rpctimeout=30
```

### 1.3 - Restart Bitcoin Core

To apply changes and enable RPC, you must restart Bitcoin Core

## Step 2 - Configure and Run this script

### 2.1 - Download this repo

Now we want to get this repo downloaded into a folder elsewhere such as on your desktop. This location will be referenced as `<path/to/folder/here>` later.

If you are familiar with Git, you can also just do a Git clone where you wish to place it.

If you just want to quickly download a zip, you can do so by clicking  `Clone or download` on this Github page and pick `Download Zip`. Then unzip it somewhere, such as on your desktop.

### 2.2 - Edit the `export.js` config options

You'll want to edit between where it says `Begin Config ` and `End Config`.

```javascript
//////// Begin Config ////////
var clientConnection = new Client({
    username: 'bitcoinrpc',
    password: 'YourRPCPassword'
});

var walletPassword = 'YourBitcoinCorePassphaseOrLeaveThisBlank';

///////// End Config /////////
```

Update the `username` and `password` variables to be whatever you set it in the `bitcoin.conf` file.

Then for `walletPassword`, you need to set your passphrase - If you never set a password on Bitcoin Core, blank that out such as looking like:

```javascript
var walletPassword = '';
```

If your wallet password was "qwerty" it would look like this:

```javascript
var walletPassword = 'qwerty';
```

### 2.3 - Open your terminal or command prompt

After you open your terminal or command prompt depending on your system, you want to `cd` into the folder you stored this script. 

```bash
cd <path/to/folder/here>
```

Then run `npm install` to download and install the required dependencies for this script in the same window.

```bash
npm install
```

You see some npm warnings but in the end, it should list what's installed or something like `up to date in 1.809s`

### 2.4 - Run export.js 

Then once everything is installed and you are done changing config options. You are to the last step to export! Congratulations for getting this far!

Now all you have to do is run `node export.js` in the same window. Make sure you just have `node` in front and not just ` export.js` typed in, as on some systems like Windows you'll get a error from "Windows Script Host" which isn't the same as Node as this script is written towards the APIs available for node!

```bash
node export.js
```

Once this finishes up you'll have a `keys.txt` file with one private key per line in your `<path/to/folder/here>` where you ran this script.

Once done, I recommend disabling RPC by undoing what was added to `bitcoin.conf` and then restarting Bitcoin core.

## If you found this script helpful

If this script was any help to you, feel free to donate BTC to me `12ASN4Rb4hDnzbjaQqdmK8MzRQcCiTDVBi`. I'd really appreciate for helping.
