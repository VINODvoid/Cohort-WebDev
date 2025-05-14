import { Router } from "express";
import { userMiddleware } from "../middlewares/auth.middleware";
import { Linkshare } from "../controllers/link.controller";


export const LinkRouter = Router();

LinkRouter.post("/brain/share",userMiddleware,Linkshare);
