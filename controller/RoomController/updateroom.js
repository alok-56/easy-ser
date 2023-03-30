const roomModel = require('../../db/schema/room');

const updateroom = async (req, res) => {
    let room = await roomModel.updateOne(
        { _id: req.params.id },
        {
            $set: req.body
        }
    )
   res.send(room)
}

module.exports = updateroom;