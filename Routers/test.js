const express = require('express')
const router = express.Router();
const Mining = require('../Hash/hash')



const blockchainDb = require('../model/blockSchema')
let database = [];

//DATABASE
const mongoose = require('mongoose')
const db = require('../model/Config').dbUrl;
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('mongodb Connected...');

    }).catch((err) => {
        console.log('mongoconnection errr' + err);

    })

function dataSave(input) {
    let newBlock = new blockchainDb(input)
    newBlock.save()
        .then(doc => {
            // res.render('sucussful', {
            //     suc: 'Register Successfully'
            // })
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
    // console.log(len);



    if (blocks === 0) {
        // res.render('signup', {
        //     suc: 'Database Empty'
        // })
    }
    else {
        //console.log(database[len].PrevHash);
        let prevHash = database[len].PrevHash;
        let data = prevHash + 1
        let hash = ''

        nonce = Mining.Pow(prevHash, data)
        hash = Mining.Hash(prevHash, nonce, data)
        // console.log(nonce);

        // console.log(hash);

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
                name: 'Genesis',
                Dob: 'my born',
                Job: 000,
            },

        }

    }



}

function GenesisBlock() {



    let date = Date()

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
            name: 'Genesis',
            Dob: 'my born',
            Job: 000,
        },

    }
    //console.log(elements);
    dataSave(elements)
}
//GenesisBlock()
Database()

module.exports = router;