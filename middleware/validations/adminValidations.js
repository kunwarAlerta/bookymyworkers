const joi = require('joi')
const {  ValidationErrorApi } = require("../errors/errorsapi");

const validateAdminSignin = async (req, res, next) => {
    try {
        let schema = joi.object().keys({
            email:joi.string().required(),
            password: joi.string().required(),
      });
        const { error }= schema.validate(req.body);
        if (error) {
          throw new ValidationErrorApi(error.details ? error.details[0].message : "");
        }
        next();
      } catch (error) {
        next(error);
      } 
};


module.exports = {validateAdminSignin};
