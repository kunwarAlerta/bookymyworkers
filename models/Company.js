const mongoose = require("mongoose");

const CompanyModel = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true,
  },
  image: {
    type: String,
    index: true,
  },
  
  reviews:{
    type: [{ref:"Review" ,type: mongoose.Schema.Types.ObjectId }],
  },
createdAt: { type: Date, default: Date.now },
});


const Company = mongoose.model("Company", CompanyModel);
module.exports = Company;
