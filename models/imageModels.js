import mongoose from "mongoose"

//This is what data is associated with the image so if you wanna add any other data you need to add it here so it's actually stored 
const ImageSchema = new mongoose.Schema({
    title:String,
    description:String,
    filePath:String,
    cloudinaryId: String,
    createdBy:{
        type:mongoose.Types.ObjectId,
        ref: 'User',
    },
    }, {timestamps: true });
export default mongoose.model('Image', ImageSchema);