const express = require("express");
const {
  validateSignUp,
  validateSignin,
} = require("../../middleware/validations/userValidations");
const router = express.Router();


const userController = require("../controllers/userController");
const homeController = require("../controllers/homeController");
const categoryController = require("../controllers/categoryController");
const companyController = require("../controllers/companyController");


router.get("/", homeController.index);

router.get("/categories", categoryController.index);
router.get("/companies", companyController.index);


router.get("/category/:search", categoryController.search);

router.get("/welcome/:category",companyController.index);


router.get("/business", (req, res) => {
  res.render("frontend/landing/business", { title: "Business" , user:req.session.user});
});

router.get("/signin", (req, res) => {
  res.render("frontend/auth/signin", { title: "Sign In" , success: req.flash("success"),error: req.flash("error")});
});



router.get("/signup", (req, res) => {
  res.render("frontend/auth/signup", { title: "Sign Up" , success: req.flash("success"),error: req.flash("error")});
});


router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect('/');
});


router.get("/privacy", (req, res) => {
  res.render("frontend/cms/privacy", { title: "Privacy Policy" ,user:req.session.user});
});

router.get("/terms", (req, res) => {
  res.render("frontend/cms/terms", { title: "Terms & Conditions" ,user:req.session.user});
});



router.post("/signin", validateSignin,userController.signin);
router.post("/signup", validateSignUp, userController.signup);


module.exports = router;
