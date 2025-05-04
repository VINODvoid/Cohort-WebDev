import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
export const userMiddleware = async(req:Request,res:Response,next:NextFunction)=>{
    const tokenHeader = req.headers["authorization"];
    if (!tokenHeader) {
        return res.status(401).json({ message: "Authorization header is missing" });
    }
    const decodeToken = jwt.verify(tokenHeader, process.env.JWT_SECRET as string);
       if(decodeToken)
       {
        next();
       }
}