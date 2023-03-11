const bookingmodel = require('../../db/schema/booking');
const updatebooking = async (req, res) => {
    let data = await bookingmodel.updateOne(
        { _id: req.body.id },
        {
            $set: req.body
        }
    )
    if (data) {
        res.send(data)
    }
}
module.exports = updatebooking;