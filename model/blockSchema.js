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

        partNumber: String,
        equipType: String,
        scalablepart: String,
        Qty_2018: Number,
        Qty_2019: Number,

        name: String,
        Dob: String,
        Job: Number,
    },

})


module.exports = mongoose.model('block', blockSchema);