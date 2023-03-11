const Userautmodel = require('../../db/schema/UserAut')

const signup = async (req, res) => {
    let data = await Userautmodel.findOne({ email: req.body.email })
    if (data) {
        res.send("user already signup");
    }
    else {
        let user = new Userautmodel(req.body);
        user = await user.save();
        res.send(user);
    }
}


module.exports = signup;
