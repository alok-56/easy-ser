const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
    SellerId: String,
    name: String,
    number: String,
    email: String,
    roomname:String,
    roomimg: String,
    address: String,
    district: String,
    state: String,
    pincode: Number,
    dic:String,
    Fullroomprice: Number,
    Siglebedprice: Number,
    ElectricCharge: String,
    remainingbed: Number,
    Totalbed: Number,
    Roomtype: String,
    parking: String,
    powerbackup: String,
    Preferred: String,
    Available: String,
    cooking: String,
    closingtime: String,
    visitor: String,
    bathroom: String,
    OppsiteGender: String,
    Smoking: String,
    LoudMusic: String,
    party: String,
    acroom:String,
    // fan: Boolean,
    // bed: Boolean,
    // Table: Boolean,
    // light: Boolean,
    furniture:Array,
    commonarea:Array
})

const roomModel = mongoose.model("rooms", roomSchema);
module.exports = roomModel;