const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Date: String,
    Password: String,
    ID: String,
    Choice: String,



})
module.exports = mongoose.model("users", userSchema);