const Images = require("../models/Image");

const getAllImages = async (req, res, next) => {
  try {
    const images = await Images.find();
    res.status(200).json(images)
  } catch (error) {}
};

const uploadImage = async (req, res, next) => {
  try {
    console.log(req.body.image);
    
    const { image } = req.body;

    if (!image) {
      return res.status(400).json({ message: "No image data provided!" });
    }

    const newImage = new Images({ image });

    await newImage.save();
    console.log(req.body);

    res.status(200).send("Uploaded");
  } catch (err) {
    console.log("error", err);
  }
};

const deleteImage = async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    const image = await Images.deleteOne({_id: id})
    res.status(200).json({message: "Image Deleted"})
};

module.exports = { getAllImages, uploadImage, deleteImage };
