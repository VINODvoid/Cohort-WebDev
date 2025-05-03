import { Router } from 'express';
import { registerUser } from '../controllers/user.controller';

export const UserRouter = Router();


UserRouter.post("/signup",function(req,res,next){
    try {
        registerUser(req,res,next)
    } catch (error) {      
    }
})


