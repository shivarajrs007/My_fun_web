const express = require('express')
const router = express.Router();
var localStorage = require('localStorage')





const usersDb = require('../model/userScema')
const blockchainDb = require('../model/blockSchema')


router.post('/signin', (req, res) => {
    let data = []
    const elements = {
        Email: req.body.email,
        Password: req.body.pass
    }
    //console.log(elements)


    async function EmailVarification() {



        const user = await usersDb.findOne({ Email: elements.Email })

        localStorage.setItem('myData', JSON.stringify(user));
        myValue = localStorage.getItem('myData');
        let jsonvalue = JSON.parse(myValue);

        let idVal = jsonvalue.ID;
        //console.log(idVal.slice(0, 3));


        if (user == null) {
            res.render('signin', {
                msg: 'Email doesn\'t match'
            })
        }
        else if (elements.Password != user.Password) {
            res.render('signin', {
                msg: 'Password doesn\'t match'
            })
        }
        else {
            const blocks = await blockchainDb.find({ ID: idVal })
            //console.log(blocks);
            data.push(...blocks)
            console.log(data);

            res.render('welcome', {
                name: jsonvalue.Name,
                id: jsonvalue.ID,
                data: data
            })


        }



    }
    EmailVarification()

})


module.exports = router;