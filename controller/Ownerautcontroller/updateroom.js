const roomModel = require('../../db/schema/room')

const updateroombyowner = async (req, res) => {
    let data = await roomModel.updateOne(
        { SellerId: req.body.id },
        {
            $set: req.body
        }
    )
    if (data) {
        res.send({ code: 200, message: "updtaed", data: data })
    }
    else {
        res.send({ code: 500, message: "not found" })
    }
}

module.exports = updateroombyowner;