import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {
      type: String,
      required: [true, 'Username is required '],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    role: {
      type: String,
      enum: ['user', 'admin'],
      default: 'user',
    },
    avatar: String,
    avatarPublicId: String,
    bio: {
      type: String,
      maxlength: 200,
    }
  });
  

UserSchema.methods.toJSON = function(){
    let obj = this.toObject();
    delete obj.password;
    return obj;
}

export default mongoose.model('User', UserSchema);