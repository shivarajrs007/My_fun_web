const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
    index: Number,
    Name: String,
    Email: String,
    Date: String,
    Password: String,

    PrevHash: String,
    Currenthash: String,
    Nonce: Number,

    Data: {
<<<<<<< HEAD
        partNumber: String,
        equipType: String,
        scalablepart: String,
        Qty_2018: Number,
        Qty_2019: Number,
=======
        name: String,
        Dob: String,
        Job: Number,
>>>>>>> 75f9b3c92d53596b96ebbaa461c77551a8021e43
    },

})


module.exports = mongoose.model('block', blockSchema);