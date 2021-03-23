const User = require("../../../models/User");
const template = require("../../../helpers/templates");
const messages = require("../../../helpers/messages");
const common = require("../../../helpers/common");
const sendRender = require("../../../helpers/response");
const { ValidationError, NotFound } = require("../../../middleware/errors/errors");

async function signin(req, res, next) {
  try {
    var data = await User.findOne({ email: req.body.email });
    if (!data) {
      throw new NotFound(messages.EMAIL_NOT_FOUND);
    }
    var encPass = await common.compareEncHash(req.body.password,data.password);
    if(!encPass){
      throw new ValidationError(messages.INCORRECT_PASSWORD);
    }
   req.session.user = data;
   return res.redirect('/categories');
  } catch (error) {
    next(error);
  }
}

async function signup(req, res, next) {
  try {
   var pass= await common.generateEncHash(req.body.password);
   req.body.password=pass;
   var user = new User(req.body);
    var exists = await User.findOne({ email: req.body.email });
    if (exists) {
      throw new ValidationError(messages.EMAIL_EXISTS);
    }
     var data=await user.save();
     sendRender(
      req, 
      res,
      template.SIGNUP.name,
      template.SIGNUP.title,
      messages.USER_REGISTER_SUCCESSFULLY,
      data
    );
  } catch (error) {
    next(error);
  }
}

module.exports.signin = signin;
module.exports.signup = signup;
