const express = require('express')
const router = express.Router();

router.get('/dashboard', (req, res) => {
    const AdminDB = require('../model/AdminSchema')
    const blockchainDb = require('../model/blockSchema')
    let data = []
    async function Admins() {
        const admin = await AdminDB.findOne()
        const blocks = await blockchainDb.find()
        // console.log(admin.Name);

        //console.log(blocks);
        data.push(...blocks)
        //console.log(data);

        res.render('Admin', {
            name: admin.Name,
            id: admin.ID,
            data: data,
            block: "Blocks in blockchain"
        })
    }
    Admins()
})



module.exports = router;