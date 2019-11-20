const express = require('express')
const router = express.Router();






router.get('/inventory', (req, res) => {
    const AdminDB = require('../model/AdminSchema')
    const blockchainDb = require('../model/blockSchema')
    let data = []
    async function Sec() {
        const blocks = await blockchainDb.find({ Section: "Inventory" })
        const admin = await AdminDB.findOne()
        //console.log(admin.Name);

        //console.log(blocks);
        data.push(...blocks)
        //console.log(data);

        if (blocks.length === 0) {
            res.render('Admin', {
                name: admin.Name,
                id: admin.ID,
                data: data,
                block: "No blocks in blockchain"
            })
        }
        else {
            res.render('Admin', {
                name: admin.Name,
                id: admin.ID,
                data: data,
                block: " Blocks in blockchain"
            })

        }
    }
    Sec()

    //res.render('Inventory')
})
router.get('/Assembly', (req, res) => {
    const AdminDB = require('../model/AdminSchema')
    const blockchainDb = require('../model/blockSchema')
    let data = []
    async function Asl() {
        const blocks = await blockchainDb.find({ Section: "Assembly" })
        const admin = await AdminDB.findOne()
        //console.log(admin.Name);

        //console.log(blocks);
        data.push(...blocks)
        //console.log(data);

        if (blocks.length === 0) {
            res.render('Admin', {
                name: admin.Name,
                id: admin.ID,
                data: data,
                block: "No blocks in blockchain"
            })
        }
        else {
            res.render('Admin', {
                name: admin.Name,
                id: admin.ID,
                data: data,
                block: " Blocks in blockchain"
            })

        }
    }
    Asl()
    //res.render()
})

router.get('/warehouse', (req, res) => {
    const AdminDB = require('../model/AdminSchema')
    const blockchainDb = require('../model/blockSchema')
    let data = []
    async function War() {
        const blocks = await blockchainDb.find({ Section: "warehouse" })
        const admin = await AdminDB.findOne()
        //console.log(admin.Name);

        //console.log(blocks);
        data.push(...blocks)
        //console.log(data);

        if (blocks.length === 0) {
            res.render('Admin', {
                name: admin.Name,
                id: admin.ID,
                data: data,
                block: "No blocks in blockchain"
            })
        }
        else {
            res.render('Admin', {
                name: admin.Name,
                id: admin.ID,
                data: data,
                block: " Blocks in blockchain"
            })

        }
    }
    War()

    //res.render('warehouse')
})


module.exports = router;