const express = require('express')
const router = express.Router();

const blockchainDb = require('../model/blockSchema')


router.get('/dashbord', (req, res) => {
    data = []
    async function DashBoard() {

        const blocks = await blockchainDb.find()
        // console.log(blocks);
        data.push(...blocks)
        console.log(data);
        res.render('dashbord', {
            data: data




        })
    }
    DashBoard()

})



module.exports = router;