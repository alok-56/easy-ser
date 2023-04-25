const ownermodel = require('../../db/schema/Owneraut')


const Loginowner = async (req, res) => {
    if (req.body.email && req.body.password) {
        let data = await ownermodel.findOne(req.body)
        if (data) {
            res.send({ code: 200, message: "login", data: data })
        }
        else {
            res.send({ code: 500, message: "not found" })
        }
    }
    else {
        res.send({ code: 500, message: "empty details" })
    }

}