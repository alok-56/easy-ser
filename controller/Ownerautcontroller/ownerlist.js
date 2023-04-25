const owneraut = require('../../db/schema/Owneraut')

const ownerlist = async (req, res) => {
    let data = await owneraut.find()
    if (data) {
        res.send({ code: 200, data: data })
    }
}

module.exports = ownerlist;