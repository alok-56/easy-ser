const ownermodel = require('../../db/schema/Owneraut')

const Signupowner = async (req, res) => {
    let data = await ownermodel.findOne({ email: req.body.email })
    if (data) {
        res.send({ code: 500, message: "user already resistred" });
    }
    else {
        let data = await ownermodel(req.body)
        data = await data.save();
        if (data) {
            res.send({ code: 200, message: "resistered", data: data })
        }
        else {
            res.send({ code: 500, message: "error" })
        }
    }
}
