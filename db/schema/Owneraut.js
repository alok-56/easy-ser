const mongoose = require('mongoose')

const ownerautschema = new mongoose.Schema({
    Name: String,
    Email: String,
    Number: String,
    Password: String,
    Address: String,
    Landmark: String,
    Pincode: String,
    roomtype: String,
    Available: String,
    totalbed: String,
    verified: String,
    id: String,
    image: String
})

const owneraut = mongoose.model("owneraut", ownerautschema)

module.exports = owneraut;