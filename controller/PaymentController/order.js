const Razorpay = require('razorpay');
require('dotenv').config();
const KEY_ID = 'rzp_test_MtraH0q566XjUb';
const KEY_SECRET = 'W7kdpNZq9scZ30kTfNA3szfD';

const order = async (req, res) => {
    let instance = new Razorpay({ key_id: KEY_ID, key_secret: KEY_SECRET })

    var options = {
        amount: req.body.price * 100,  // amount in the smallest currency unit
        currency: "INR"
    };
    instance.orders.create(options, function (err, order) {
        if (err) {
            return res.send({ code: 500, message: 'server err',data:err })
        }
        return res.send({ code: 200, message: "order created", data: order })
    });

}
module.exports = order;