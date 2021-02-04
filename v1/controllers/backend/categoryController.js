const categoryService = require("../../services/categoryService");
const template = require("../../../helpers/templates");
const sendRender = require("../../../helpers/response");

async function createCategory(req, res, next) {
  try {
   var exists= await categoryService.search({name:req.body.name});
   if(exists) return res.json({data:"already exists"});
      
   if(req.file){
     req.body.image = req.file.filename;
   }
     var data = await categoryService.create(req.body)
     return res.json({data})
  } catch (error) {
    next(error);
  }
}

module.exports.createCategory = createCategory;
