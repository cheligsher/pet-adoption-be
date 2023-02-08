const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: "dm4rue7fk",
  api_key: "882889117265694",
  api_secret: "G06uyjrw0LUjpFvQext2l9fe78Q",
});

const cloudStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(
      null,
      file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: cloudStorage });

const generateUrl = (req, res, next) => {
  const imageUrl = `http://localhost:8080/${req.file.filename}`;
  req.body.imageUrl = imageUrl;
  console.log("imageUrl",req.body.imageUrl)
  next();
};

const findFile = (req, res, next) => {
  console.log("first", req.file)
  console.log("second", req.body)
  if (req.file) {
    console.log("reqFile-", req.file.path)
    console.log("reqPic-", req.body.picture)
    req.body.picture = req.file.path;
  }
  next();
};

module.exports = { upload, generateUrl, findFile };
