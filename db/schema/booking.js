const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  usersId: String,
  sellerId: String,
  productId: String,
  add: String,
  state: String,
  district: String,
  ownername: String,
  ownerEmail: String,
  ownerNumber: String,
  roomname: String,
  roomimg: String,
  name: String,
  email: String,
  Ages: String,
  bookingtype: String,
  gender: String,
  profession: String,
  price: String,
  status: String,
  transitionId: Array,
  orderId: Array,
  date: String,
  lastdate: String,
  canceldate: String,
  time: String,
  pay: String,
  refundid: String,
  refundstatus: String,
  extendpay: Number,
  lat: String,
  lon: String,
});

const bookingmodel = mongoose.model("bookingRooms", bookingSchema);
module.exports = bookingmodel;
