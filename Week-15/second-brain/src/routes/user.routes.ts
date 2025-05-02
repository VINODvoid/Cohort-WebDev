import { Router } from "express"
import { registerUser } from "../controllers/user.controller";

export const UserRouter = Router();

// below code we can use url like localhost:3000/api/v1/signup
UserRouter.post("/signup", registerUser); // Cleaner and preferred

UserRouter.post("/signin",(req,res)=>{
    console.log("singin");
    res.send("singin")
})





