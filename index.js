const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const dotenv = require('dotenv');
require("./db/config");
dotenv.config();
const port = process.env.PORT || 4500;
const book = require('./controller/BookingController/bookupdatebyback')

setInterval(() => {
    book()
}, 10000)


//----------cloudinary--------------------//
const fileupload = require('express-fileupload');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'dxlmwq61j',
    api_key: '449172957755657',
    api_secret: '_svozk1NVYoC0NWVSoV-fhR-j5c',
    secure: true
});

//-------------routes-----------------------//
const Auth = require('./routes/AutModel/user')
const Room = require('./routes/RoomModel/room')
const Book = require('./routes/BookingModel/book')
const Order = require('./routes/PaymentModel/payment')



//----------------MIDDLEWARE-------------------//
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(express.json());
//-----------------MIDDLEWARE END----------------//


//-----------------USE OF ROUTES--------------------------//

app.use('/Aut', Auth);
app.use('/room', Room);
app.use('/roombooking', Book);
app.use('/payment', Order);



app.listen(port, () => {
    console.log(`app is running on port ${port}`);
});