const Service = require("../../models/Service");

async function getServices() {
  try{
   var services= await Service.find({});
   return services;
  }
  catch(error){
    throw new Error(error);
  }
 }

 async function searchService(searchString) {
  try{
   var services= await Service.find({ name: { $regex: searchString, $options: "i" }});
   return services;
  }
  catch(error){
    throw new Error(error);
  }
 }


 module.exports.getServices = getServices;
 module.exports.searchService = searchService;

 