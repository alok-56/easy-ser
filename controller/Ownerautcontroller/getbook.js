const bookingmodel = require('../../db/schema/booking')

const getbookowner = async (req, res) => {
    let data = await bookingmodel.find({ SellerId: req.body.SellerId })
    if (data) {
        res.send({ code: 200, message: "found", data: data })
    }
    else {
        res.send({ code: 500, message: "not found" })
    }
}

module.exports=getbookowner;