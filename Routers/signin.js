const express = require('express')
const router = express.Router();


const blockchainDb = require('../model/blockSchema')

router.post('/signin', (req, res) => {
    let data = []
    const elements = {
        Email: req.body.email,
        Password: req.body.pass
    }
    console.log(elements)


    async function EmailVarification() {

        const blocks = await blockchainDb.findOne({ Email: elements.Email })
        console.log(blocks);
        data.push(blocks)
        // console.log(data);


        if (blocks == null) {
            res.render('signin', {
                msg: 'Email doesn\'t match'
            })
        }

<<<<<<< HEAD
        else if (elements.Email != blocks.Email) {
=======

        if (blocks === null) {
>>>>>>> 75f9b3c92d53596b96ebbaa461c77551a8021e43
            res.render('signin', {
                msg: 'Email doesn\'t match'
            })
        }
        else if (elements.Password != blocks.Password) {
            res.render('signin', {
                msg: 'Password doesn\'t match'
            })
        }
        else {
            res.render('update', {
                data: data
            })
        }



    }
    EmailVarification()

})


module.exports = router;