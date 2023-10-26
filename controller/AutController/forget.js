const Userautmodel = require('../../db/schema/UserAut')

const forget = async (req, res) => {

    let data = await Userautmodel.findOne({ email: req.body.email });
    if (data) {
        let result = await Userautmodel.updateOne(
            { email: req.body.email },
            {
                $set: req.body
            }
        )
        res.send(result);
    }
    else {
        res.send("incorrect email");
    }

}

module.exports = forget;