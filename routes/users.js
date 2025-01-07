var express = require('express');
var router = express.Router();
var { getAllImages, uploadImage, deleteImage } = require("../controller/imageController")

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/images", getAllImages)
router.post("/image/upload", uploadImage)
router.delete("/delete/:id", deleteImage)

module.exports = router;
