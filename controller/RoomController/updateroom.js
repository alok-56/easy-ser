const roomModel = require('../../db/schema/room');

const updateroom = async (req, res) => {
    let room = await roomModel.updateone(
        { _id: req.body.id },
        {
            $set: req.body
        }
    )
    if (data) {
        res.send(room)
    }
}

module.exports = updateroom;