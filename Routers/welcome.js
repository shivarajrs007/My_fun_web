const express = require('express')
const router = express.Router();
var localStorage = require('localStorage')

router.get('/new', (req, res) => {
    myValue = localStorage.getItem('myData');
    let jsonvalue = JSON.parse(myValue);

    let idVal = jsonvalue.ID;
    if (idVal) {
        res.render('Assemblyline')
    }

})


module.exports = router;