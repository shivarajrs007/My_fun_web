const express = require('express')
const router = express.Router()

const Hash = require('../Hash/hash')
const blockchainDb = require('../model/blockSchema')
let database = [];

router.post('/Ass', (req, res) => {
    //console.log(req.body);
    const data = (req.body.partnumber +
        req.body.equpType +
        req.body.Scale +
        req.body.Qty1 +
        req.body.Qty2).toString()



    async function BlockDb() {
        let blocks = await blockchainDb.find()
        let nonce = 0
        let cHash = ''
        console.log(blocks.length);


        if (blocks.length === 0) {
            const prevhash = "GENESISHASH"
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

            }
            //console.log(inputs);
            let newBlock = new blockchainDb(inputs)
            newBlock.save()
                .then(doc => {
                    // res.render('sucussful', {
                    //     suc: 'Register Successfully'
                    // })
                    console.log(doc)
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

        }
        console.log(inputs);
        let newBlock = new blockchainDb(inputs)
        newBlock.save()
            .then(doc => {
                // res.render('sucussful', {
                //     suc: 'Register Successfully'
                // })
                console.log(doc)
            })
            .catch(err => {
                console.error(err)
            })



    }
    BlockDb()



})

module.exports = router;