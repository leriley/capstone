import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import imageModels from "../models/imageModels.js";
import cloudinary from 'cloudinary'
import { promises as fs } from 'fs'

//For the main gallery
export const getAllImages = async(req, res) => {
  const images = await imageModels.find({}).sort({ _id: -1 });
    res.status(StatusCodes.OK).json({ images })
};

//For the user's gallery
export const getAllUserImages = async(req, res) => {
  const images = await imageModels.find({createdBy:req.user.userId}).sort({ _id: -1 });
  res.status(StatusCodes.OK).json({ images })
};

//creating image and uploading to cloudinary
export const createImage = async (req, res) => {
    console.log(req.file);
  
    if (!req.file) {
      return res.status(StatusCodes.BAD_REQUEST).json({ msg: 'No file uploaded' });
    }
  
    const cloudinaryResponse = await cloudinary.v2.uploader.upload(req.file.path);
  
    const { title, description } = req.body;
  
    const newImage = await imageModels.create({
      title,
      description,
      filePath: cloudinaryResponse.secure_url,
      cloudinaryId: cloudinaryResponse.public_id,
      createdBy: req.user.userId,
    });
  
    res.status(StatusCodes.CREATED).json({ image: newImage });
  }

//to view a single image
export const getImage = async(req, res) => {
    const { id } = req.params;
    //this creates the image object and has the data associated with it, populate will add a createdBy object with _id and username instead of just one value
    const image = await imageModels.findById(id).populate('createdBy', 'username')
    res.status(StatusCodes.OK).json({ image });
}

export const updateImage = async(req, res) => {
    const { id } = req.params;

    const updatedImage = await imageModels.findByIdAndUpdate(id,req.body, {
        new:true
    })

    res.status(StatusCodes.OK).json({ msg: "Image modified", image: updatedImage });
}

export const deleteImage = async (req, res) => {
  const { id } = req.params;

  const image = await imageModels.findById(id);
  if (!image) {
    return res.status(404).json({ msg: "Image not found" });
  }
//req.user is access to the user fields
  if (req.user.userId !== image.createdBy.toString()) {
    return res.status(403).json({ msg: "User not authorized to delete this image"})
  }

  if (image.cloudinaryId) {
    try {
      const cloudinaryResponse = await cloudinary.v2.uploader.destroy(image.cloudinaryId);
      console.log("Cloudinary destroy:", cloudinaryResponse);
    } catch (error) {
      console.error("Cloudinary deletion error:", error);
    }
  }
  await image.deleteOne();

  res.status(200).json({ msg: "Image deleted", removedImage: image });
};