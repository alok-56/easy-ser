const mongoose = require('mongoose');
require('dotenv').config()
let db = process.env.DATABASE
mongoose.connect(db).then((res) => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
})
