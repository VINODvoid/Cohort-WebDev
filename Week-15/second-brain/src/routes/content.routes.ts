import { Router } from "express";
import { userMiddleware } from "../middlewares/auth.middleware";

export  const ContentRouter = Router();

ContentRouter.post("/content", userMiddleware, );