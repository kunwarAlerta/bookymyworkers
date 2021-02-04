const category = require("../../services/categoryService");
const template = require("../../../helpers/templates");
const messages = require("../../../helpers/messages");
const sendRender = require("../../../helpers/response");

async function index(req, res, next) {
  try {
    var data = await category.getCategories();
    sendRender(
        req, 
        res,
        template.CUSTOMER.name,
        template.CUSTOMER.title,
        "",
        data,
      );
  } catch (error) {
    next(error);
  }
}



module.exports.index = index;

