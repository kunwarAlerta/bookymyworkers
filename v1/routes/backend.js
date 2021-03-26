const express = require("express");
const router = express.Router();
const { uploadImage } =require("../services/fileUploadService")
const {
    validateAdminSignin,
  } = require("../../middleware/validations/adminValidations");

const  adminController =require("../controllers/backend/adminController");


router.post("/user/signin", validateAdminSignin,adminController.signin);
router.post("/user/signin", validateAdminSignin,adminController.signin);
router.post("/user/signup", adminController.signup);

router.post("/category/add", uploadImage.single('image'),  adminController.createCategory);

router.get("/category/list",  adminController.getCategories);

router.post("/company/add",  uploadImage.single('image'), adminController.createCompany);

module.exports = router;
