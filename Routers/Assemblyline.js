const express = require('express')
const router = express.Router()

const usersDB = require('../model/userScema')

router.post('/Ass', (req, res) => {

    console.log(req.body);


})

module.exports = router;