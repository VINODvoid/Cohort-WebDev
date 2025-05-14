import mongoose, { Types } from "mongoose";

const ContentTypes = ['image','audio','video','article'];

const ContentSchema = new mongoose.Schema({
    link:{
        type:String,
        required:true,
    },
    title:{
        type:String,
        required:true,
    },
    types:{
        type:String,
        required:true,
        enum:ContentTypes,
    },
    tage:[{
        type:Types.ObjectId,
        ref:"Tag",
    }],
    userId :{
        type:Types.ObjectId,
        ref:'User',
        required:true,
    }
})

export const Content = mongoose.model("Content",ContentSchema);