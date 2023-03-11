const bookingmodel = require('../../db/schema/booking');

const postbooking = async (req, res) => {
    let data = await bookingmodel(req.body);
    data = await data.save();
    res.send({ code: 200, message: "booked", data: data })
}

module.exports = postbooking;