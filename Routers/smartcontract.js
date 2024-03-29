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

        const block = await blockchainDb.find({ index: indx })
        // console.log(block);

        // console.log(block[0].Req);
        Ava = block[0].Available - val
        Reqs = block[0].Req - val


        const blocks = await blockchainDb.findOneAndUpdate({ index: indx }, {
            $set: {
                Assigned: req.body.assign,
                Approval: 'Approved',
                Available: Ava,
                Req: Reqs,
            }
        }, { new: true })
        //console.log(blocks);
        //database.push(blocks)
        //console.log(database);
        const blockss = await blockchainDb.find()
        //console.log(admin.Name);

        //console.log(blocks);
        data.push(...blockss)
        //console.log(data);
        res.render('smartcontract', {
            data: data,
        })
    }
    Assign()
})


module.exports = router;