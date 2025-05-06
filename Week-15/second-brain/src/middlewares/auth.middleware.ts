import { Request,Response,NextFunction } from "express";
import jwt from 'jsonwebtoken';
export const userMiddleware =  function(req:Request,res:Response,next:NextFunction){
    const tokenHeader = req.headers["authorization"];
    if (!tokenHeader) {
         res.status(401).json({ message: "Authorization header is missing" });
         return
    }
    try {
        const decodeToken =  jwt.verify(tokenHeader, process.env.JWT_SECRET as string);
           if(decodeToken)
           {
            (req as any).user = decodeToken
            next();
           }
    } catch (error) {
         res.status(403).json({message:"Invalid or Expired token"})
    }
}