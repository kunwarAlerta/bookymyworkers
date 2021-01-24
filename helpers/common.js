var jwt = require("jsonwebtoken");
var config = require("config");
var bcrypt =require('bcryptjs')
const jwtSign = async (data) => {
  var accessToken = await jwt.sign({ _id: data._id }, config.get("jwtsecret"), {
    expiresIn: config.get("jwtexpire"),
  });
  return accessToken;
};


const generateEncHash = async (input) => {
  var salt= await bcrypt.genSalt(10);
  var genhash=await bcrypt.hash(input, salt);
  return genhash;
};

const compareEncHash = async (input,comp) => {
 var genhash= await bcrypt.compare(input, comp);
  return genhash;
};


module.exports = { jwtSign ,generateEncHash ,compareEncHash};
