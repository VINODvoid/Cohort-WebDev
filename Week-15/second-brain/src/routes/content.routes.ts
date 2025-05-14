import { Router } from "express";
import { userMiddleware } from "../middlewares/auth.middleware";
import { addContent, deleteContent, displayContent } from "../controllers/content.controller";

export  const ContentRouter = Router();

ContentRouter.post("/content", userMiddleware,addContent );

ContentRouter.get("/content",userMiddleware,displayContent);

ContentRouter.delete("/content",userMiddleware,deleteContent);
