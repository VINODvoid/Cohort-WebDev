import { Request, Response } from "express";
import { Link } from "../models/link.model";
import { random } from "../utils/random";
import { Content } from "../models/content.model";
import { User } from "../models/user.model";

export const addLink = async(req:Request,res:Response)=>{
    try {
        const {share} = req.body;
        if(share)
        {
            // @ts-ignore
            const ExistingLink = await Link.findOne({
                userId:(req as any).userId
            })
            if (ExistingLink) {
            res.json({ hash: ExistingLink.hash }); // Send existing hash if found.
            return;
        }
        // Generate a new hash for the shareable link.
        const hash = random(10);
        await Link.create({ userId: (req as any).userId, hash });
        res.json({ hash })
        }
        else {
        // Remove the shareable link if share is false.
        await Link.deleteOne({ userId: (req as any).userId });
        res.json({ message: "Removed link" }); // Send success response.
    }

    } catch (error) {
        res.status(403).json({
            message:"Link Functionality is not available"
        })
    }

}

export const Linkshare = async(req:Request,res:Response)=>{
    try {
        const hash = req.params.shareLink;

    // Find the link using the provided hash.
    const link = await Link.findOne({ hash });
    if (!link) {
        res.status(404).json({ message: "Invalid share link" }); // Send error if not found.
        return;
    }

    // Fetch content and user details for the shareable link.
    const content = await Content.find({ userId: link.userId });
    const user = await User.findOne({ _id: link.userId });

    if (!user) {
        res.status(404).json({ message: "User not found" }); // Handle missing user case.
        return;
    }

    res.json({
        username: user.username,
        content
    }); 
        
    } catch (error) {
        res.json({
            message:"Shareable link functionality is not available",
        })
    }
}