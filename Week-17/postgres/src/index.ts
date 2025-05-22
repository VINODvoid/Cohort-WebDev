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
    const response = await client.query("SELECT * FROM users");
    console.log(response.rows[0]);
    
}

connectDb()