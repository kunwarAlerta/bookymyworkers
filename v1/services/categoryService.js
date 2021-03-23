const Category = require("../../models/Category");

async function getCategories() {
  try{
   var categories= await Category.find({});
   return categories;
  }
  catch(error){
    throw new Error(error);
  }
 }

 async function create(body) {
  try{
   var categories= await Category.create(body);
   return categories;
  }
  catch(error){
    throw new Error(error);
  }
 }
 async function search(body) {
  try{
   var categories= await Category.findOne(body);
   return categories;
  }
  catch(error){
    throw new Error(error);
  }
 }

 async function searchCategories(searchString) {
  try{
   var categories= await Category.find({ name: { $regex: searchString, $options: "i" }});
   return categories;
  }
  catch(error){
    throw new Error(error);
  }
 }


 module.exports.getCategories = getCategories;
 module.exports.create = create;
 module.exports.search = search;
 module.exports.searchCategories = searchCategories;

 