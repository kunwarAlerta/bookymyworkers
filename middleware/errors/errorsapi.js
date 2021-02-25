"use strict";
class GeneralErrorApi extends Error {
  constructor(message) {
    super();
    this.message = message;
  }

  getCode() {
    if (this instanceof BadRequestApi) {
      return 400;
    }
    if (this instanceof NotFoundApi) {
      return 404;
    }
    if (this instanceof ValidationErrorApi) {
      return 201;
    }
    return 500;
  }
}

class BadRequestApi extends GeneralErrorApi {}
class NotFoundApi extends GeneralErrorApi {}
class ValidationErrorApi extends GeneralErrorApi {}

module.exports = {
 GeneralErrorApi,
 BadRequestApi,
 NotFoundApi,
 ValidationErrorApi,
};
