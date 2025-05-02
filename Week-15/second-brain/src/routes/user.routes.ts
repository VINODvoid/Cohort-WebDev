import { Router } from "express"

export const UserRouter = Router();

// below code we can use url like localhost:3000/api/v1/signup
UserRouter.post("/signup",(req,res)=>{
    console.log("singned");
    res.send("singup")
})
UserRouter.post("/signin",(req,res)=>{
    console.log("singin");
    res.send("singin")
})





