const express = require('express')
const router = express.Router();


router.get('/smart', (req, res) => {
    res.render('smartcontract', {
        smrt: "Coming Soon..."
    })
})


module.exports = router;