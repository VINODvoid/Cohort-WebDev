import { Router } from "express";
import { userMiddleware } from "../middlewares/auth.middleware";

export  const ContentRouter = Router();

ContentRouter.post("/content", userMiddleware, (req, res) => {
    // Your actual logic here
    res.json({ message: "Content created successfully", user: (req as any).user });
  });