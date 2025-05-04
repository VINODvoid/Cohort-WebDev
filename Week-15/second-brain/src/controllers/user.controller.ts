import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';
import { User } from '../models/user.model';
import bcrypt from 'bcryptjs';


const registerUserSchema = z.object({
    username: z.string().min(3).max(10),
    password: z.string().min(8).max(20)
});

export const registerUser = async (req: Request, res: Response) => {
    try {
        const validatedData = registerUserSchema.parse(req.body);
        const { username, password } = validatedData;

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(403).json({ message: 'User already exists with this username' });
        }

        const user = new User({ username, password });
        await user.save();
        return res.status(200).json({ message: "User Registered Successfully" });

    } catch (error) {
        if (error instanceof z.ZodError) {
            return res.status(411).json({ errors: error.errors[0].message });
        }

    }
};


export const loginUser = async (req: Request, res: Response) => {
    try {
        const validatedData = registerUserSchema.parse(req.body);
        const { username, password } = validatedData;

        const existingUser = await User.findOne({ username });
        if (!existingUser) {
            return res.status(404).json({ message: "User is not found" });
        }

        const validatePassword = await bcrypt.compare(password, existingUser.password);
        if(!validatePassword)
        {
            return res.status(401).json({message:"Password is InCorrect"});
        }
        
    } catch (error) {

    }
}