const express = require('express')
const router = express.Router()
var localStorage = require('localStorage')

const Hash = require('../Hash/hash')
const blockchainDb = require('../model/blockSchema')
// let database = [];



router.post('/edit', (req, res) => {
    myValue = localStorage.getItem('myData');
    let jsonvalue = JSON.parse(myValue);
    //console.log(jsonvalue);

    let idVal = jsonvalue.ID;


    async function dbUpadte() {
        // let idt_database = []
        let indx = req.body.index;
        //console.log(idVal);
        const idt = await blockchainDb.find({ ID: idVal })
        //console.log(idt);
        // idt_database.push(...idt)
        //console.log(idt_database);
        let match = false;

        for (let i = 0; i < idt.length; i++) {

            if (idt[i].index == indx) {
                match = true;
                break;
            }
        }
        if (match == true) {
            const blocks = await blockchainDb.findOneAndUpdate({ ID: idVal, index: indx }, {
                $set: {
                    partNumber: req.body.partnumber,
                    equipType: req.body.equpType,
                    scalablepart: req.body.Scale,
                    Qty_2018: req.body.Qty1,
                    Qty_2019: req.body.Qty2,
                    index: req.body.index,
                }
            }, { new: true })
            //console.log(blocks);
            //database.push(blocks)
            //console.log(database);

            res.render('productSuc', {
                suc: 'Block successfully Modified'
            })
        }
        else {
            res.render('productfail', {
                fail: 'Index value mismatch '
            })
        }


    }
    dbUpadte()


})
module.exports = router;