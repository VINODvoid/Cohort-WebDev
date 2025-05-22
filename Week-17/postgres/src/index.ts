import { Client } from "pg";

const client = new Client({
    user:"postgres",
    password:"mysecretpassword",
    host:"localhost",
    database:"postgres",
    port:5432,
})


async function connectDb()
{
    await client.connect();
    console.log("Db connected");
    
}

connectDb()