const mongoose = require("mongoose");

const UserModel = new mongoose.Schema({
  firstname: {
    type: String,
    index: true,
  },
  lastname: {
    type: String,
    index: true,
  },
  profilepic: {
    type: String,
    index: true,
  },
  phone: {
    type: String,
    index: true,
  },
  email: {
    type: String,
    index: true,
  },
  password: {
    type: String,
    index: true,
  },
  role: { type: String, enum: ['customer', 'partner','admin'], required: true },
    createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", UserModel);
module.exports = User;
