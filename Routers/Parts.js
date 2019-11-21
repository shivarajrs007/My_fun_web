const express = require('express')
const router = express.Router()
var localStorage = require('localStorage')

const Hash = require('../Hash/hash')
const blockchainDb = require('../model/blockSchema')
let database = [];
let select = ''

router.post('/part', (req, res) => {
    myValue = localStorage.getItem('myData');
    let jsonvalue = JSON.parse(myValue);

    let idVal = jsonvalue.ID;
    console.log(idVal);
    //console.log(req.body);
    const data = (req.body.partnumber +
        req.body.equpType +
        req.body.Scale +
        req.body.Qty1 +
        req.body.Qty2).toString()
    if (idVal.slice(0, 3) == "ASL") {
        select = "Assembly"
    }
    else if (idVal.slice(0, 3) == "INV") {

        select = "Inventory"
    }
    else {
        select = "Warehouse"

    }


    async function BlockDb() {
        let blocks = await blockchainDb.find()
        let nonce = 0
        let cHash = ''
        //console.log(blocks.length);


        if (blocks.length === 0) {
            const prevhash = "GenesisHash"
            const time = Date()
            const inx = blocks.length + 1

            nonce = Hash.Pow(prevhash, data)
            cHash = Hash.Hash(prevhash, nonce, data)

            const inputs = {
                partNumber: req.body.partnumber,
                equipType: req.body.equpType,
                scalablepart: req.body.Scale,
                Qty_2018: req.body.Qty1,
                Qty_2019: req.body.Qty2,

                hash: cHash,
                prevHash: prevhash,
                timeStamp: time,
                index: inx,
                Nonce: nonce,
                ID: idVal,
                Section: select,

            }
            //console.log(inputs);
            let newBlock = new blockchainDb(inputs)
            newBlock.save()
                .then(doc => {
                    res.render('nodeSuc', {
                        suc: 'Block added sucessfully'
                    })
                    //console.log(doc)
                })
                .catch(err => {
                    console.error(err)
                })


        }

        database.push(...blocks)
        //console.log(database[blocks.length - 1].prevHash);

        const prevhash = database[blocks.length - 1].hash
        const time = Date()
        const inx = blocks.length + 1

        nonce = Hash.Pow(prevhash, data)
        cHash = Hash.Hash(prevhash, nonce, data)

        const inputs = {
            partNumber: req.body.partnumber,
            equipType: req.body.equpType,
            scalablepart: req.body.Scale,
            Qty_2018: req.body.Qty1,
            Qty_2019: req.body.Qty2,

            hash: cHash,
            prevHash: prevhash,
            timeStamp: time,
            index: inx,
            Nonce: nonce,
            ID: idVal,
            Section: select,


        }
        console.log(inputs);
        let newBlock = new blockchainDb(inputs)
        newBlock.save()
            .then(doc => {
                res.render('nodeSuc', {
                    suc: 'Block added sucessfully'
                })
                //console.log(doc)
            })
            .catch(err => {
                console.error(err)
            })



    }
    BlockDb()



})

module.exports = router;