const express = require('express')
const router = express.Router();


const blockchainDb = require('../model/blockSchema')
router.get('/smart', (req, res) => {

    let data = []
    async function Admins() {

        const blocks = await blockchainDb.find()
        //console.log(admin.Name);

        //console.log(blocks);
        data.push(...blocks)
        //console.log(data);

        if (blocks.length === 0) {
            res.render('smartcontract', {

                data: data,
                block: "No blocks in blockchain"
            })
        }
        else {
            res.render('smartcontract', {

                data: data,

            })

        }
    }
    Admins()
})

router.post("/smart", (req, res) => {
    let data = []
    async function Assign() {
        indx = req.body.block
        val = req.body.assign
        val = parseInt(val)
        result = 10 - val


        const blocks = await blockchainDb.findOneAndUpdate({ index: indx }, {
            $set: {
                Assigned: req.body.assign,
                Approval: 'Approved',
                Available: result,
            }
        }, { new: true })
        //console.log(blocks);
        //database.push(blocks)
        //console.log(database);
        const block = await blockchainDb.find()
        //console.log(admin.Name);

        //console.log(blocks);
        data.push(...block)
        //console.log(data);
        res.render('smartcontract', {
            data: data,
        })
    }
    Assign()
})


module.exports = router;