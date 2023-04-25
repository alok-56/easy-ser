const roomModel = require('../../db/schema/room')

const getroomowner = async (req, res) => {
    let data = await roomModel.find({ SellerId: req.body.sellerid });
    if (data) {
        res.send({ code: 200, message: "found", data: data })
    }
    else {
        res.send({ code: 500, message: "not found" })
    }
}

module.exports = getroomowner;