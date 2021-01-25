const Company = require("../../models/Company");

async function getCompanies() {
  try{
   var companies= await Company.find({});
   return companies;
  }
  catch(error){
    throw new Error(error);
  }
 }


 module.exports.getCompanies = getCompanies;