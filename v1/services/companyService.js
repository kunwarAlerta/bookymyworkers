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

 
 async function create(body) {
  try{
   var companies= await Company.create(body);
   return companies;
  }
  catch(error){
    throw new Error(error);
  }
 }
 async function search(body) {
  try{
   var companies= await Company.findOne(body);
   return companies;
  }
  catch(error){
    throw new Error(error);
  }
 }


 module.exports.getCompanies = getCompanies;
 module.exports.create = create;
 module.exports.search = search;