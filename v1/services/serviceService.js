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


 module.exports.getServices = getServices;