import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import imageModels from "../models/imageModels.js";
import cloudinary from 'cloudinary'
import { promises as fs } from 'fs'

export const getCurrentUser = async (req,res) => {
    const user = await User.findOne({_id:req.user.userId});
    const userWithoutPassword = user.toJSON();
    res.status(StatusCodes.OK).json({user: userWithoutPassword})
}

export const getSingleUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select('-password');
        if (!user) {
            return res.status(StatusCodes.NOT_FOUND).json({ message: 'User not found' });
        }
        res.status(StatusCodes.OK).json({ user });
    } catch (error) {
        console.error('Error fetching user:', error);  // Log the error
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error', error: error.message });
    }
};


export const getApplicationStats = async (req,res) => {
    const users = await User.countDocuments()
    const images = await imageModels.countDocuments()
    res.status(StatusCodes.OK).json({ users, images})
}

export const updateUser = async (req, res) => {
    const newUser = { ...req.body };
    delete newUser.password;
    const existingUser = await User.findById(req.user.userId);
    console.log("Existing User's avatarPublicId:", existingUser.avatarPublicId);

    if (req.file) {
        if (existingUser.avatarPublicId) {
            try {
                const destroyResponse = await cloudinary.v2.uploader.destroy(existingUser.avatarPublicId, { invalidate: true });
                console.log("Cloudinary destroy response:", destroyResponse);
            } catch (error) {
                console.error("Error destroying old image in Cloudinary:", error);
            }
        }

        const response = await cloudinary.v2.uploader.upload(req.file.path);
        await fs.unlink(req.file.path);
        newUser.avatar = response.secure_url;
        newUser.avatarPublicId = response.public_id;
    }

    const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser, { new: true });

    res.status(200).json({ msg: 'User updated successfully', updatedUser });
};
  
  