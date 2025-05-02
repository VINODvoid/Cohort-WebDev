import { Model, Schema } from "mongoose";

const UserSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
})

export const User = new Model("User",UserSchema);