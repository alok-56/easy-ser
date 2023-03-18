var crypto = require("crypto");
const Razorpay = require('razorpay');
require('dotenv').config();
const KEY_ID = 'rzp_test_MtraH0q566XjUb';
const KEY_SECRET = 'W7kdpNZq9scZ30kTfNA3szfD';


const verifypayment = async (req, res) => {


    let body = req.body.response.razorpay_order_id + "|" + req.body.response.razorpay_payment_id;


    var expectedSignature = crypto.createHmac('sha256', KEY_SECRET)
        .update(body.toString())
        .digest('hex');

    if (expectedSignature === req.body.response.razorpay_signature) {
        res.send({
            code: 200, message: "sign valid", data: {
                order_id: req.body.response.razorpay_order_id,
                payment_id: req.body.response.razorpay_payment_id
            }
        })
    }
    else {
        res.send({ code: 500, message: "sign invalid" })

    }




}
module.exports = verifypayment;