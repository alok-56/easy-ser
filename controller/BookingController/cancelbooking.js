const bookingmodel = require('../../db/schema/booking')

const CancelBooking = async (req, res) => {
    let data = await bookingmodel.find({ usersId: req.params.id, status: "cancelled" });
    res.send({ code: 500, message: "found", data: data });
}
module.exports = CancelBooking;