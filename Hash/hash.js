var SHA256 = require("crypto-js/sha256");

module.exports = {
    Hash,
    Pow
};

function Hash(prevHash, nonce, input) {
    let data = prevHash + nonce + input.toString()
    return SHA256(data).toString()
}

function Pow(prevHash, input) {
    let nonce = 0;
    let difficulty = '000'
    let hash = '0';

    while (true) {

        if (hash.startsWith(difficulty)) {
            break;
        }
        else {


            hash = Hash(prevHash, nonce, input).toString()
        }

        nonce = nonce + 1;

    }
    console.log(nonce);

    console.log(hash);

    return nonce - 1;
}

