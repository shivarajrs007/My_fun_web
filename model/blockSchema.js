const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({


    partNumber: String,
    equipType: String,
    scalablepart: String,
    Qty_2018: Number,
    Qty_2019: Number,



})


module.exports = mongoose.model('block', blockSchema);