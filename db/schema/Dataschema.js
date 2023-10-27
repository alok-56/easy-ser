const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
  {
    dynamicData: [mongoose.Schema.Types.Mixed],
  },
  { timeseries: true }
);

const DataModel = mongoose.model("Data", DataSchema);

module.exports = DataModel;
