//  Bigi to work with Big Integers like 256 bits.
var bigi = require('bigi');
//  JavaScript Bitcoin library.
var bitcoinlib = require('bitcoinlibjs-lib');
//  WIF - Bitcoin Wallet Import Format
var wif = require('wif');
//  Set some defaults
var minSize = 5;
var message = '\n error: enter a seed above 5 chars\n';


module.exports = function(cmd, env) {
    if (typeof cmd === 'string') {
        if (cmd.length >= minSize) {
			
			//Generate an address from SHA256 hash
            var hash = bitcoinlib.crypto.sha256(cmd);
			console.log(hash);
			
			//Pass hash to obtain bignumber
            var d = bigi.fromBuffer(hash);
			console.log(d);
			
			//Obtain Public adress by passing "d" to elliptical curve
            var address = new bitcoinlib.ECPair(d).getAddress();
			console.log('BitCoin Address : '+address);
			
			//  WIF -Encode Module to generate Private Key by passing below values
			//	version: 128,
            //	privateKey : hash
            //	compressed: true/false
            var privateKey = wif.encode(128, hash, true);
			console.log('Private Key :'+privateKey);
        }
		
        console.log(message);
        return false;
    }

    console.log('\n error:  seed is missing\n');
    return false;
};

