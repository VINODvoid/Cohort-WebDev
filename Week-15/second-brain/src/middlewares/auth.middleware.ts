import { Request,Response,NextFunction } from "express";

export const userMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    const authHeader = req.headers;
    console.log(authHeader);
    
}