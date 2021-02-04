const express = require("express");
const router = express.Router();
const { uploadImage } =require("../services/fileUploadService")

const {createCategory}=require("../controllers/backend/categoryController");
const {createCompany}=require("../controllers/backend/companyController");

router.post("/category/add", uploadImage.single('image'),  createCategory);
router.post("/company/add",  uploadImage.single('image'), createCompany);

module.exports = router;
