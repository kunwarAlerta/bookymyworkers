const category = require("../../services/categoryService");
const template = require("../../../helpers/templates");
const sendRender = require("../../../helpers/response");

async function index(req, res, next) {
  try {
    var data = await category.getCategories();
    sendRender(
        req, 
        res,
        template.CATEGORIES.name,
        template.CATEGORIES.title,
        "",
       data,
      );
  } catch (error) {
    next(error);
  }
}

async function search(req, res, next) {
    try {
      var data = await category.searchService(req.params.search);
      sendRender(
          req, 
          res,
          template.CATEGORIES.name,
          template.CATEGORIES.title,
          "",
         data,
        );
    } catch (error) {
      next(error);
    }
  }



module.exports.index = index;
module.exports.search = search;

