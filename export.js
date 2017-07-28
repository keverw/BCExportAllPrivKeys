var Client = require('bitcoin-core'),
	async = require('async'),
	fs = require('fs');

//////// Begin Config ////////
var clientConnection = new Client({
	username: 'bitcoinrpc',
	password: 'YourRPCPassword'
});

var walletPassword = 'YourBitcoinCorePassphaseOrLeaveThisBlank';

///////// End Config /////////
var totalCoinBal = 0;
var addressesToGetPriKey = [];
var privateKeys = [];

function runDumpPrivKey() {
	async.eachLimit(addressesToGetPriKey, 1, function (address, callback) {
		console.log('Getting private key for', address);

		clientConnection.dumpPrivKey(address, function (err, result) {
			if (err) return callback(err);

			privateKeys.push(result);
			callback();
		});

	}, function done(err) {
		if (err) return console.log(err);

		var txtContents = '';
		var firstLineWrote = false;

		privateKeys.forEach(function (key) {

			if (firstLineWrote) txtContents += '\n';

			firstLineWrote = true;
			txtContents += key;
		});

		console.log('Saving ' + privateKeys.length + ' private keys to txt file');
		fs.writeFile('./keys.txt', txtContents, function (err) {
			if (err) throw err;
			console.log('The file has been saved!');
		});

	});
}

clientConnection.listAddressGroupings(function (err, group) {
	if (err) return console.log(err);

	group.forEach(function (addressGroup) {
		addressGroup.forEach(function (address) {
			addressesToGetPriKey.push(address[0]);
			totalCoinBal += address[1];
		});
	});

	console.log('You have ' + totalCoinBal + ' coins and ' + addressesToGetPriKey.length + ' addresses');

	if (walletPassword.length > 0) //unlock wallet
	{
		clientConnection.walletPassphrase(walletPassword, 86400, function (err, result) { //unlock for one day - should export much faster however
			if (err) return console.log(err);

			runDumpPrivKey();
		});
	}
	else {
		runDumpPrivKey();
	}

})
