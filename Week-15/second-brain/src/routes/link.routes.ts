import { Router } from "express";
import { userMiddleware } from "../middlewares/auth.middleware";
import { addLink, Linkshare } from "../controllers/link.controller";


export const LinkRouter = Router();

LinkRouter.post("/brain/share",userMiddleware,addLink);
LinkRouter.get("/brain/:shareLink",userMiddleware,Linkshare)