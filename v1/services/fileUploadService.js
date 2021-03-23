
var multer = require('multer');
var uploadImage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'uploads/images/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + file.originalname);
    }
  });
   
  var uploadImage = multer({ storage: uploadImage });

module.exports.uploadImage=uploadImage;
  