const Userautmodel = require('../../db/schema/UserAut')

const profile = async (req, res) => {
    let profile = await Userautmodel.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
    res.status(200).json(profile)
}

module.exports=profile;