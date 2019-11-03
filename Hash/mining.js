var SHA256 = require("crypto-js/sha256");

module.exports = {
    mining,
};

function mining(input) {

    let hash = '0';
    let nonce = 0;
    let val = input
    // console.log(val);

    while (true) {

        if (hash.startsWith('000')) {
            break;
        }
        else {
            hash = SHA256(val + hash + nonce).toString()
        }

        nonce = nonce + 1;

    }
    console.log(nonce);
    console.log(hash);
    return hash;

}
//mining('hello')
