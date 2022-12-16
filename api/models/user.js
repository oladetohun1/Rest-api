const mongoose = require("mongoose");

// create a schema

const userSchema = new mongoose.Schema({
    firstname:{type:String, required:true, unique:false},
    lastname:{type:String, required:true, unique:false},
    email:{type:String, required:true, unique:true},
    phone:{type:String, required:true, unique:true},
    // profilePic: {type:string, default: "" },
    password:{type:String, required:true},
    // password:{type:String, required:true},
    isAdmin:{type: Boolean, default:false},
},
{timestamps: true }
);

module.exports = mongoose.model("user", UserSchema)
