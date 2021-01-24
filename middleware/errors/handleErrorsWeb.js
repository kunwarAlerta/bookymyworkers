const { GeneralError } = require("./errors");

const handleErrorsWeb = (err, req, res, next) => {
  if (err instanceof GeneralError) {
    return req.flash("error", err.message) && res.redirect("back");
  }

  return  req.flash("error", err.message) && res.redirect("back");
};

module.exports = handleErrorsWeb;
