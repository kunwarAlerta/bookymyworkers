const service = require("../services/serviceService");
const template = require("../../helpers/templates");
const messages = require("../../helpers/messages");
const sendRender = require("../../helpers/response");

async function index(req, res, next) {
  try {
    var data = await service.getServices();
    sendRender(
        req, 
        res,
        template.CUSTOMER.name,
        template.CUSTOMER.title,
        messages.HOME_SUCCESS,
        data,
      );
  } catch (error) {
    next(error);
  }
}

module.exports.index = index;

