const bookingmodel = require('../../db/schema/booking');

const userbook = async (req, res) => {
    let data = await bookingmodel.find({ usersId: req.params.id });
    res.status(200).json(data);
}

module.exports = userbook;