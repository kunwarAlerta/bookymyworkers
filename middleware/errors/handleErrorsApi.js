const { GeneralErrorApi } = require("./errorsapi");

const handleErrorsApi = (err, req, res, next) => {
  if (err instanceof GeneralErrorApi) {
    return res.status(err.getCode()).json({
      code: err.getCode(),
      status: "error",
      message: err.message,
    });
  }

  return res.status(500).json({
    code: 500,
    status: "error",
    message: err.message,
  });
};

module.exports = handleErrorsApi;