import { Request, Response } from "express";
import { Link } from "../models/link.model";
import { random } from "../utils/random";

export const Linkshare = async(req:Request,res:Response)=>{
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