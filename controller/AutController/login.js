const Userautmodel = require('../../db/schema/UserAut')

const login = async (req, res) => {
    if (req.body.email && req.body.password) {
        let login = await Userautmodel.findOne(req.body);
        res.status(200).json(login);
    }
    else{
        res.status(500).json("user not found")
    }
}
module.exports = login;