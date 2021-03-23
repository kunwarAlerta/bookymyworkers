const { check, validationResult } = require("express-validator");
const { ValidationError } = require("../errors/errors");

const validateSignUp = async (req, res, next) => {
  try {

    await check("email", "Invalid email address").isEmail().run(req);
    await check("password", "Minimum length should be 6")
      .isLength({ min: 6 })
      .run(req);
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new ValidationError(result);
    }
    if(req.body.password !== req.body.cpassword){ 
      throw new ValidationError('Passwords must be same') 
    } 
    next();
  } catch (error) {
    next(error);
  }
};

const validateSignin = async (req, res, next) => {
  try {
    await check("email", "Invalid email address").isEmail().run(req);
    await check("password", "Minimum length should be 6")
      .isLength({ min: 6 })
      .run(req);
    const result = validationResult(req);
    if (!result.isEmpty()) {
      throw new ValidationError(result);
    }
    next();
  } catch (error) {
    next(error);
  }
};

const validateAuth= async (req, res, next) => {
  try {
   if(req.session.user){
    next();
   }
  } catch (error) {
    next(error);
  }
};

module.exports = { validateSignUp, validateSignin };
