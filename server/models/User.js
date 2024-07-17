import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, unique: true},
    role:{type: String, required:true, unique: true},
    avatar:{type: String, default:'#'},
    resetPasswordToken: { type: String },
    resetPasswordExpires: { type: Date }
})

const UserModel = mongoose.model("User", UserSchema)

export {UserModel as User}