const bookingmodel = require('../../db/schema/booking')

const CancelBooking = async (req, res) => {
    let data = await bookingmodel.find({ usersid: req.params.userid, status: "cancelled" });
    res.send({ code: 500, message: "found", data: data });
}
module.exports = CancelBooking;;