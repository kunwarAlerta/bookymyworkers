const company = require("../services/companyService");
const template = require("../../helpers/templates");
const sendRender = require("../../helpers/response");

async function index(req, res, next) {
  try {
    var data = await company.getCompanies();
    console.log(data)
    sendRender(
        req, 
        res,
        template.COMPANIES.name,
        template.COMPANIES.title,
        "",
        data,
      );
  } catch (error) {
    next(error);
  }
}

module.exports.index = index;

