const bookingmodel = require('../../db/schema/booking');

const Siglebook = async (req, res) => {
    let data = await bookingmodel.findOne({ _id: req.params.id });
    res.status(200).json(data);
}


module.exports = Siglebook;