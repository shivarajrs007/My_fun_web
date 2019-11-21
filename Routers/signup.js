const express = require('express')
const router = express.Router()

const usersDB = require('../model/userScema')

router.post('/register', (req, res) => {

    //console.log(req.body);

    let selectopt = req.body.selectOpt;
    let id = ''
    function idGenerate(val) {
        return val + (Math.floor((Math.random() * 10000) + 1).toString())
    }


    if (selectopt === "Assembly Line") {
        id = idGenerate("ASL")
    }
    else if (selectopt === "Inventory") {
        id = idGenerate("INV")
    }
    else {
        id = idGenerate("WAR")
    }
    //console.log(id);
    const user = {
        Name: req.body.uname,
        Email: req.body.email,
        Date: req.body.date,
        Password: req.body.pass1,
        ID: id,
        Choice: selectopt
    }
    async function userDb() {
        let Db = await usersDB.find();
        // console.log(Db);
        let match = false;
        for (let i = 0; i < Db.length; i++) {

            if (Db[i].Email == req.body.email) {
                match = true;
                break;
            }
        }
        if (match == true) {
            res.render('signup', {
                psw: "Email already exists"
            })
        }

        else if (req.body.pass1 !== req.body.pass2) {
            res.render('signup', {
                psw: "Password doen't match"
            })
        }

        else {
            let newBlock = new usersDB(user)
            newBlock.save()
                .then(doc => {
                    res.render('sucussful', {
                        suc: 'Register Successfully',
                        id: id
                    })
                    //console.log(doc)
                })
                .catch(err => {
                    console.error(err)
                })

        }
    }
    userDb()



})

module.exports = router;