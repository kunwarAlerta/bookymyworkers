const common = require("../../../helpers/common");
const { sendRes } = require("../../../helpers/response");
const categoryService = require("../../services/categoryService");
const companyService = require("../../services/companyService");
const messages = require("../../../helpers/messages");
const statusCode = require("../../../helpers/statusCodes");
const User = require("../../../models/User");
const { ValidationError } = require("../../../middleware/errors/errors");

async function signin(req, res, next) {
    try {
        var sendObj = {};
        var admin = await User.findOne({
          email: req.body.email,
          role:'admin'
        });
        if (!admin) throw new ValidationError(messages.ADMIN_NOT_FOUND);
        var loggedin = await common.compareEncHash(
          req.body.password,
          admin.password
        );
        if (!loggedin) throw new ValidationError(messages.ADMIN_NOT_FOUND);
        var accesstoken = await common.jwtSign(admin);
        sendObj.user = admin;
        sendObj.accessToken = accesstoken;
        sendRes(
          req,
          res,
          statusCode.SUCCESS,
          messages.USER_SIGNIN_SUCCESSFULLY,
          sendObj
        );
        
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
     sendRes(
      req,
      res,
      statusCode.SUCCESS,
      messages.USER_SIGNIN_SUCCESSFULLY,
      data
    );
  } catch (error) {
    next(error);
  }
}


async function createCategory(req, res, next) {
  try {
   var exists= await categoryService.search({name:req.body.name});
   if(exists)  throw new ValidationError(messages.CATEGORY_EXIST_ALEADY);
      
   if(req.file){
     req.body.image = req.file.filename;
   }
     var data = await categoryService.create(req.body);
     sendRes(
      req,
      res,
      statusCode.SUCCESS,
      messages.CATEGORY_CREATED_SUCCESSFULLY,
      data
    );
     return res.json({data})
  } catch (error) {
    next(error);
  }
}
async function getCategories(req, res, next) {
  try {
    var data = await categoryService.getCategories();
    sendRes(
     req,
     res,
     statusCode.SUCCESS,
     "",
     data
   );
    return res.json({data})
  } catch (error) {
    next(error);
  }
}

async function getCompanies(req, res, next) {
  try {
    var data = await companyService.getCompanies();
     sendRes(
      req,
      res,
      statusCode.SUCCESS,
      "",
      data
    );
     return res.json({data})
  } catch (error) {
    next(error);
  }
}


async function createCompany(req, res, next) {
  try {
   var exists= await companyService.search({name:req.body.name});
   if(exists) throw new ValidationError(messages.COMPANY_EXIST_ALEADY);
      
   if(req.file){
     req.body.image = req.file.filename;
   }
     var data = await companyService.create(req.body)
     sendRes(
      req,
      res,
      statusCode.SUCCESS,
      messages.COMPANY_CREATED_SUCCESSFULLY,
      data
    );
  } catch (error) {
    next(error);
  }
}

module.exports.signin = signin;
module.exports.signup = signup;
module.exports.getCategories = getCategories;
module.exports.getCompanies = getCompanies;
module.exports.createCategory = createCategory;
module.exports.createCompany = createCompany;
