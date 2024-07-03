import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username : {
        type:String,
        required:[true,"Please provide your username"],
        unique:true,
    },
    email : {
        type:String,
        required:[true,"Please provide your email"],
        unique:true,
    },
    password : {
        type:String,
        required:[true,"Please provide your password"],
    },
    isVerified:{
        type:Boolean,
        default : false
    },
    isAdmin:{
        type:Boolean,
        default : false
    },
    forgotPassword : string,
    forgotPasswordTokenExpiry:Date,
    verifyToken : String,
    verifyTokenExpiry:Date,
})

const User = mongoose.models.users || mongoose.model("users",userSchema);

export default User;