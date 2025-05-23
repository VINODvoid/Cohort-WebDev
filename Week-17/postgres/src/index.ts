import { Client } from "pg";
import express, { Request, Response } from "express";

const app = express();
app.use(express.json());


const client = new Client({
    user:"postgres",
    password:"mysecretpassword",
    host:"localhost",
    database:"postgres",
    port:5432,
})

client.connect();
console.log("Db connected");

app.post("/signup",async function(req:Request,res:Response){
    try {
        const {username, email , password } = req.body;
        // const response = await client.query("INSERT INTO users (username, email, password) VALUES ($1, $2, $3)",[username, email, password]);
        const response = await client.query("select * from users;")
        console.log(response);
        res.status(200).json({
            message:"User registerd"
        })
        return ;
    } catch (error) {
        res.status(501).json({
            message:"error"+error
        });
        return;
        
    }

})
app.listen(3000);