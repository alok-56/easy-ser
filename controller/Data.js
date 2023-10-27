const DataModel = require("../db/schema/Dataschema");

const PostData = async (req, res) => {
  try {
    let incomingData = req.body;
    const newDocument = new DataModel({ dynamicData: [incomingData] });
    let response = await newDocument.save();
    if (response) {
      res.status(200).json({
        status: "success",
        data: response,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

const FetchData = async (req, res) => {
  try {
    let data = await DataModel.find();
    if (data) {
      res.status(200).json({
        status: "success",
        message: data,
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: error.message,
    });
  }
};

module.exports = { PostData, FetchData };
