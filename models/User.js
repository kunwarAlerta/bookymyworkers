const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  email: {
    type: String,
    index: true,
    required: true,
  },
  password: {
    type: String,
    index: true,
  },
  role: { type: String, enum: ['customer', 'partner'], required: true },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserModel);
module.exports = User;
