const express = require('express')
const router = express.Router();
var localStorage = require('localStorage')





const usersDb = require('../model/userScema')

router.post('/signin', (req, res) => {
    let data = []
    const elements = {
        Email: req.body.email,
        Password: req.body.pass
    }
    //console.log(elements)


    async function EmailVarification() {

        const blocks = await usersDb.findOne({ Email: elements.Email })
        //console.log(blocks);
        //data.push(blocks)
        // console.log(data);


        if (blocks == null) {
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
            localStorage.setItem('myData', JSON.stringify(blocks));
            myValue = localStorage.getItem('myData');
            let jsonvalue = JSON.parse(myValue);

            let idVal = jsonvalue.ID;
            //console.log(idVal.slice(0, 3));


            res.render('welcome', {
                name: jsonvalue.Name,
                id: jsonvalue.ID,
                val: idVal.slice(0, 3)
            })


        }



    }
    EmailVarification()

})


module.exports = router;