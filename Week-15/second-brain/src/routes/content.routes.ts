import { Router } from "express";
import { userMiddleware } from "../middlewares/auth.middleware";
import { addContent } from "../controllers/content.controller";

export  const ContentRouter = Router();

ContentRouter.post("/content", userMiddleware,addContent );