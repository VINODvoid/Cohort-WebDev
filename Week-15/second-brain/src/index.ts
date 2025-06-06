import express from "express";
import dotenv from 'dotenv'
import { ConnectDB } from "./db";
import { UserRouter } from "./routes/user.routes";
import { ContentRouter } from "./routes/content.routes";
import { LinkRouter } from "./routes/link.routes";


// Required to read values from .env
dotenv.config();



const app = express();
app.use(express.json());


// will be using routers 
app.use("/api/v1",UserRouter);
app.use("/api/v1",ContentRouter);
app.use("/api/v1",LinkRouter);
ConnectDB()
.then(()=>{
    app.listen(process.env.PORT || 3000 , ()=>{
        console.log(`Server is running on http://localhost:${process.env.PORT}`);
        
    })
})
.catch((error)=>{
    console.log("Server Crashed ! Restart the Server");
    
})
