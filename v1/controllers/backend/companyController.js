const company = require("../../services/companyService");
const template = require("../../../helpers/templates");
const {sendRender}  = require("../../../helpers/response");


async function createCompany(req, res, next) {
  try {
   var exists= await company.search({name:req.body.name});
   if(exists) return res.json({data:"already exists"});
      
   if(req.file){
     req.body.image = req.file.filename;
   }
     var data = await company.create(req.body)
     return res.json({data})
  } catch (error) {
    next(error);
  }
}

module.exports.createCompany = createCompany;


