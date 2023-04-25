const Owneraut = require('../../db/schema/Owneraut')

const Forget = async (req, res) => {
    let data = await Owneraut.findOne({ email: req.body.email })
    if (data) {
        let data = await Owneraut.updateOne(
            { _id: req.body.id },
            { $set: req.body }
        )
        if (data) {
            res.send({ code: 200, message: "updated", data: data })
        }
        else {
            res.send({ code: 500, message: "failed to updated" })
        }

    }
    else {
        res.send({ code: 500, message: "not found" })
    }

}
module.exports =Forget;