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
<<<<<<< HEAD
        else if (req.body.pass1 !== req.body.pass2) {
=======
        // console.log(req.body.email);


        if (req.body.pass1 !== req.body.pass2) {
>>>>>>> 75f9b3c92d53596b96ebbaa461c77551a8021e43
            res.render('signup', {
                psw: 'Passward doesnot match'
            })


        }

<<<<<<< HEAD
        // else if () {
        //     res.render('signup', {
        //         emails: 'Email exists'
        //     })
        // }
=======
        if (getname(req.body.email.toString()) > -1) {
            res.render('signup', {
                emails: 'Email exists'
            })
        }
>>>>>>> 75f9b3c92d53596b96ebbaa461c77551a8021e43
        else {
            console.log(database[len].Currenthash);
            let prevHash = database[len].Currenthash;
            console.log(prevHash);

<<<<<<< HEAD


            let data = (req.body.name1 + req.body.number + req.body.dob).toString()
            console.log(data);
=======
            // let prevblock = db[0].pop()

            // //console.log(prevblock);

            // prevHash = prevblock.Currenthash
            // indexx = prevblock.index + 1
>>>>>>> 75f9b3c92d53596b96ebbaa461c77551a8021e43

            let indexx = database[len].index;

            let hash = ''

            nonce = Mining.Pow(prevHash, data)
            hash = Mining.Hash(prevHash, nonce, data)
            // console.log(nonce);

            // console.log(hash);


<<<<<<< HEAD


            elements = {
                index: indexx,
                Name: req.body.uname,
                Email: req.body.email,
                Date: req.body.date,
                Password: req.body.pass1,



                PrevHash: prevHash,
                Currenthash: hash,
                Nonce: nonce,
=======
            // let timestamp = Date();
            // timestamp = timestamp.toString()
            // const data = indexx + timestamp + req.body.data + prevHash

            // let cuurentHash = Mining.mining(data)

            // // elements = {
            //     Name: req.body.uname,
            //     Email: req.body.email,
            //     Dob: req.body.date,
            //     Password: req.body.pass1,

            //     index: indexx,
            //     Timestamp: timestamp,
            //     PrevHash: prevHash,
            //     Data: req.body.data,
            //     Currenthash: cuurentHash,
            // }

            elements = {
                Name: 'SHivaraj',
                Email: 'shivaraj@gmail.com',
                Dob: '2 oct 2019',
                Password: 'shiva321',

                index: 23,
                Timestamp: '2 oct 2019',
                PrevHash: 'HSUSKJHSKHSJHJHSKHS',
                Data: {
                    name: 'Shiva',
                    Dob: '2 0ct 2019',
                    Job: 2345,
                },
                Currenthash: '0000DGDJHLKJDHLK',
            }
            console.log(elements);
>>>>>>> 75f9b3c92d53596b96ebbaa461c77551a8021e43

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