const Owneraut = require('../../db/schema/Owneraut')

const verification = async (req, res) => {
    let data = await Owneraut.updateOne(
        { _id: req.body.id },
        {
            $set: req.body
        }
    )
    if (data) {
        res.send({ code: 200, message: "send verification", data: data })
    }
    else {
        res.send({ code: 500, message: "failed to send" })
    }
}

module.exports = verification;