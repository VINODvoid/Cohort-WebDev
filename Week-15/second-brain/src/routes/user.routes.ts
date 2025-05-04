import { Router } from 'express';
import { loginUser, registerUser } from '../controllers/user.controller';

export const UserRouter = Router();


UserRouter.post("/sign-up",function(req,res){
    try {
        registerUser(req,res)
    } catch (error) {      
    }
})


UserRouter.post("/sign-in",function(req,res){
    try {
        loginUser(req,res);
    } catch (error) {
    }
})