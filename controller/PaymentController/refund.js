const Razorpay = require('razorpay');
const KEY_ID = 'rzp_test_MtraH0q566XjUb';
const KEY_SECRET = 'W7kdpNZq9scZ30kTfNA3szfD';


const Refund = async (req, res) => {
    var instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET })
     var paymentId=req.body.payment;
     instance.payments.refund(paymentId, {
        "amount": req.body.price,
    })
    res.send(instance)

}

module.exports = Refund;