import mongoose, { Types } from "mongoose";

const LinkSchema = new mongoose.Schema({
    hash:{
        type:String,
    },
    userId:{
        type:Types.ObjectId,
        ref:"User",
        required:true,
        unique:true
    },
})

export const Link = mongoose.model("Link",LinkSchema);