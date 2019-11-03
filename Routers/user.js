const express = require('express')
const router = express.Router();

router.get('/signin', (req, res) => {
    res.render('signin')
})
router.get('/signup', (req, res) => {
    res.render('signup')
})

router.get('/forget', (req, res) => {
    res.render('forget')
})
router.get('/update', (req, res) => {
    res.render('update')
})

module.exports = router;