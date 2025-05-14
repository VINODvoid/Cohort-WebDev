import { Request, Response, NextFunction } from "express";
import jwt from 'jsonwebtoken';
import { User } from "../models/user.model";

export const userMiddleware = function(req: Request, res: Response, next: NextFunction) {
    const tokenHeader = req.headers["authorization"];
    if (!tokenHeader) {
        return res.status(401).json({ message: "Authorization header is missing" });
    }

    try {
        const decodeToken = jwt.verify(tokenHeader, process.env.JWT_SECRET as string) as jwt.JwtPayload;

        if (decodeToken && decodeToken.id) {
            (req as any).user = decodeToken;     // Optional full payload
            (req as any).userId = decodeToken.id; // Explicitly set userId
            next();
        } else {
            res.status(401).json({ message: "Invalid token structure" });
        }
    } catch (error) {
        res.status(403).json({ message: "Invalid or Expired token" });
    }
};
