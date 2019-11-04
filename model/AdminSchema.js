const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    password: String,
    ID: String




})


module.exports = mongoose.model('Admin', adminSchema);
