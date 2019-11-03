const express = require('express')
const router = express.Router();


const blockchainDb = require('../model/blockSchema')

router.post('/forget', (req, res) => {

    const elements = {
        Email: req.body.email,
        Date: req.body.date
    }

    async function EmailVarification() {

        const blocks = await blockchainDb.findOne({ Email: elements.Email })
        console.log(blocks);
        //data.push(blocks)
        // console.log(data);

        console.log(elements.Date + ' ' + blocks.Dob);
        let password = blocks.Password


        if (elements.Email != blocks.Email) {
            res.render('signin', {
                msg: 'Email doesn\'t match'
            })
        }
        if (elements.Date != blocks.Dob) {
            res.render('signin', {
                msg: 'Date doesn\'t match'
            })
        }
        else {

            res.render('signIn', {
                password: "Your password :" + password
            })

        }



    }
    EmailVarification()

})


module.exports = router;