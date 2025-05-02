import express from "express";
import dotenv from 'dotenv'
import { ConnectDB } from "./db";
dotenv.config();


const app = express();
ConnectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("Server Crashed ! Restart the Server");
    
})
