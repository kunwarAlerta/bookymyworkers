const mongoose = require("mongoose");

const ReviewModel = new mongoose.Schema({
  comment:{
    type: String,
    default:""
  },
 rating:{
    type: Number,
  },
createdAt: { type: Date, default: Date.now },
});


const Review = mongoose.model("Review", ReviewModel);
module.exports = Review;
