const express = require('express')
const router = express.Router();
const Mining = require('../Hash/hash')



const blockchainDb = require('../model/blockSchema')
let database = [];




router.post('/register', (req, res) => {
    let date = req.body.date;

    function dataSave(input) {
        let newBlock = new blockchainDb(input)
        newBlock.save()
            .then(doc => {
                res.render('sucussful', {
                    suc: 'Register Successfully'
                })
                console.log(doc)
            })
            .catch(err => {
                console.error(err)
            })
    }

    async function Database() {
        let nonce = 0;

        let blocks = await blockchainDb.find()
        database.push(...blocks)

        let len = database.length - 1;
        console.log(database);



        if (blocks === 0) {
            res.render('signup', {
                suc: 'Database Empty'
            })
        }
        else if (req.body.pass1 !== req.body.pass2) {

            res.render('signup', {
                psw: 'Passward doesnot match'
            })


        }
        else {
            console.log(database[len].Currenthash);
            let prevHash = database[len].Currenthash;
            console.log(prevHash);



            let data = (req.body.name1 + req.body.number + req.body.dob).toString()
            console.log(data);

            let indexx = database[len].index;

            let hash = ''

            nonce = Mining.Pow(prevHash, data)
            hash = Mining.Hash(prevHash, nonce, data)
            // console.log(nonce);

            // console.log(hash);





            elements = {
                index: indexx,
                Name: req.body.uname,
                Email: req.body.email,
                Date: req.body.date,
                Password: req.body.pass1,



                PrevHash: prevHash,
                Currenthash: hash,
                Nonce: nonce,


                Data: {
                    partNumber: req.body.partnumber,
                    equipType: req.body.equpType,
                    scalablepart: req.body.Scale,
                    Qty_2018: req.body.Qty1,
                    Qty_2019: req.body.Qty2,
                },

            }
            console.log(elements);

            dataSave(elements)
        }



    }

    function GenesisBlock() {




        elements = {
            index: 0,
            Name: 'Genesis',
            Email: 'GenesisBlock',
            Date: date,
            Password: 'GenesisBlock',



            PrevHash: 'GenesisBlock',
            Currenthash: 'GenesisBlock',
            Nonce: 0,

            Data: {
                partNumber: req.body.partnumber,
                equipType: req.body.equpType,
                scalablepart: req.body.Scale,
                Qty_2018: req.body.Qty1,
                Qty_2019: req.body.Qty2,
            },

        }
        //console.log(elements);
        dataSave(elements)
    }
    //GenesisBlock()
    Database()


})



module.exports = router;