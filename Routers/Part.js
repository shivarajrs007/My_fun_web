const express = require('express')
const router = express.Router();

router.get('/inventory', (req, res) => {
    res.render('inventory')
})
router.get('/Assembly', (req, res) => {
    res.render('Assemblyline')
})

router.get('/warehouse', (req, res) => {
    res.render('warehouse')
})

module.exports = router;