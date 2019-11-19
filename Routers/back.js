const express = require('express')
const router = express.Router();
var localStorage = require('localStorage')

router.get('/back', (req, res) => {
    const blockchainDb = require('../model/blockSchema')
    let data = []
    async function user() {
        myValue = localStorage.getItem('myData');
        let jsonvalue = JSON.parse(myValue);

        let idVal = jsonvalue.ID;
        //console.log(idVal.slice(0, 3));
        const blocks = await blockchainDb.find({ ID: idVal })
        //console.log(blocks.length);
        data.push(...blocks)
        //console.log(data);

        if (blocks.length === 0) {
            res.render('welcome', {
                name: jsonvalue.Name,
                id: jsonvalue.ID,
                data: data,
                block: "Empty blocks in blockchain"
            })
        }
        else {
            res.render('welcome', {
                name: jsonvalue.Name,
                id: jsonvalue.ID,
                data: data,
                block: "Blocks in blockchain"
            })
        }
    }
    user()
})



module.exports = router;