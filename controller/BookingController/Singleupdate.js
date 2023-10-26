const bookingmodel = require("../../db/schema/booking");

const singleupdate = async (req, res) => {
  const _id = req.body.id;
  const book = await bookingmodel.findOne({ _id });
  if (book) {
    let data = await book.updateOne({
      $push: { transitionId: req.body.transitionId, orderId: req.body.orderId },
    });
    res.send({ status: 200, message: "update", data: data });
  } else {
    res.send({ status: 500, message: "error", data: data });
  }
};

module.exports = singleupdate;
