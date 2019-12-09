const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({


    partNumber: String,
    equipType: String,
    scalablepart: String,
    Req: Number,
    Available: Number,
    Assigned: Number,
    Approval: String,

    hash: String,
    prevHash: String,
    timeStamp: String,
    index: Number,
    Nonce: Number,
    ID: String,
    Section: String,



})


module.exports = mongoose.model('block', blockSchema);