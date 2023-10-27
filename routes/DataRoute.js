const express = require("express");
const { PostData, FetchData } = require("../controller/Data");
const DataRouter = express.Router();

DataRouter.route("/Post").post(PostData);
DataRouter.route("/Fetch").get(FetchData);

module.exports = DataRouter;
