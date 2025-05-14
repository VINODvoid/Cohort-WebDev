import { Request, Response } from "express";
import { Content } from "../models/content.model";

export const addContent = async(req:Request,res:Response)=>{
    try{
    const {link,type,title} = req.body;
    const content =  new Content({
        link,
        type,
        title
    });
    await content.save();
    res.json({ message: "Content added" });
    }
    catch(e)
    {
        res.status(403).json({
            message:"Content not added"
        })
    }
}
export const displayContent = (req:Request,res:Response)=>{
    try {
        //@ts-ignore
        const userId= req.userId;

        const content = Content.find({userId}).populate("userId","username");
        res.json(content);
    } catch (error) {
        res.status(403).json({
            message:"Not able to display contents"
        })
    }
}
