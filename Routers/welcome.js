const express = require('express')
const router = express.Router();
var localStorage = require('localStorage')

router.get('/new', (req, res) => {
    myValue = localStorage.getItem('myData');
    let jsonvalue = JSON.parse(myValue);

    let idVal = jsonvalue.ID;
    //console.log(idVal.slice(0, 3));

    if (idVal.slice(0, 3) == "ASS") {
        res.render('Assemblyline')
    }
    else if (idVal.slice(0, 3) == "INV") {
        res.render('inventory')
    }
    else {
        res.render('warehouse')

    }

})


router.get('/edit', (req, res) => {
    myValue = localStorage.getItem('myData');
    let jsonvalue = JSON.parse(myValue);

    let idVal = jsonvalue.ID;
    // console.log(idVal.slice(0, 3));

    if (idVal.slice(0, 3) == "ASS") {
        res.render('product', {
            product: 'Assembly Line'
        })
    }
    else if (idVal.slice(0, 3) == "INV") {
        res.render('product', {
            product: 'Inventory'
        })
    }
    else {
        res.render('product', {
            product: 'Warehouse'
        })
    }

})


module.exports = router;