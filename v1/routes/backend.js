const express = require("express");
const {
  validateSignUp,
  validateSignin,
} = require("../../middleware/validations/userValidations");
const router = express.Router();
const { signin, signup } = require("../controllers/userController");

router.post("/user/signin", validateSignin, signin);
router.post("/user/signup", validateSignUp, signup);

module.exports = router;
