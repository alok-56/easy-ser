const bookingmodel = require('../../db/schema/booking')

const updatebook = async (req, res) => {
    let data = await bookingmodel.updateOne(
        { sellerId: req.body.id },
        {
            $set: req.body
        }
    )

    if (data) {
        res.send({ code: 200, message: "updated booking", data: data })
    }
    else {
        res.send({ code: 500, message: "not updated booking" })
    }
}

module.exports=updatebook;