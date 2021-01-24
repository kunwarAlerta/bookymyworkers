const mongoose = require("mongoose");

const ServiceModel = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true,
  },
  image: {
    type: String,
    index: true,
  },
    createdAt: { type: Date, default: Date.now },
});


const Service = mongoose.model("Service", ServiceModel);
module.exports = Service;
