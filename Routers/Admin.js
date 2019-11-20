const express = require('express')
const router = express.Router();

const blockchainDb = require('../model/blockSchema')




router.get('/inventory', (req, res) => {
    let data = []
    async function Ass() {
        const blocks = await blockchainDb.find({ Section: "Inventory" })
        //console.log(blocks);
        data.push(...blocks)
        //console.log(data);

        res.render('dashboard', {
            name: "Inventory",
            data: data,
            block: "Blocks in blockchain"
        })
    }
    Ass()

    //res.render('Inventory')
})
router.get('/Assembly', (req, res) => {
    let data = []
    async function Ass() {
        const blocks = await blockchainDb.find({ Section: "Assembly" })
        //console.log(blocks);
        data.push(...blocks)
        //console.log(data);

        res.render('dashboard', {
            name: "Assembly Line",
            data: data,
            block: "Blocks in blockchain"
        })
    }
    Ass()
    //res.render()
})

router.get('/warehouse', (req, res) => {
    let data = []
    async function Ass() {
        const blocks = await blockchainDb.find({ Section: "warehouse" })
        //console.log(blocks);
        data.push(...blocks)
        //console.log(data);

        res.render('dashboard', {
            name: "Warehouse",
            data: data,
            block: "Blocks in blockchain"
        })
    }
    Ass()

    //res.render('warehouse')
})


module.exports = router;