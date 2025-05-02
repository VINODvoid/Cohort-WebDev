import {z} from 'zod';
import { User } from '../models/user.model';
import { Request, Response } from 'express';



// zod validation 
const registerUserSchema = z.object({
    username:z.string().min(3).max(10),
    password:z.string().min(8).max(20)
})


const registerUser = async (req: Request, res: Response) => {
    try {

        // here it validate the req.body with schema
        const validateData = registerUserSchema.parse(req.body);
        const {username,password} = validateData;
        // 
        const user = new User({username,password});
        await user.save();
        res.status(201).json({
            message:"User Registered Successfully"
        })

    } catch (error) {
        if(error instanceof z.ZodError)
        {
            res.status(401).json({
                errors:error.errors
            })
        }
        res.status(501).json({
            message:"Internal Server Error"
        })
    }
    
}