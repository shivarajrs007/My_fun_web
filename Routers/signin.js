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
    if (elements.Email == "Admin@admin") {
        const AdminDB = require('../model/AdminSchema')
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
                data: data
            })
        }
        Admins()

    }

    else {
        async function EmailVarification() {



            const user = await usersDb.findOne({ Email: elements.Email })
            //console.log(user);





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
                localStorage.setItem('myData', JSON.stringify(user));
                myValue = localStorage.getItem('myData');
                let jsonvalue = JSON.parse(myValue);

                let idVal = jsonvalue.ID;
                //console.log(idVal.slice(0, 3));
                const blocks = await blockchainDb.find({ ID: idVal })
                //console.log(blocks);
                data.push(...blocks)
                //console.log(data);

                res.render('welcome', {
                    name: jsonvalue.Name,
                    id: jsonvalue.ID,
                    data: data
                })


            }



        }
        EmailVarification()
    }

})


module.exports = router;