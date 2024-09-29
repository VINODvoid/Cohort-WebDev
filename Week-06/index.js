const express = require("express");


const app = express();
const port = 3000;
app.use(express.json());

const users = [];
app.post("/sign-up",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username:username,
        password:password,
    })
    const token = generateToken();
    res.json({
        message:"You are signed Up",
        token
    })
    
})

function generateToken(){
    const characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","y","z","x","w","q","1","2","3","4","5","6","7","8","9","0"];
    let token = "";
    for(let i=0;i<6;i++){
        const randomNumber = Math.floor(Math.random()*characters.length);
        token += characters[randomNumber];
    }
    return token;
}
app.post("/sign-in",function(req,res){})

app.listen(port,function(){
    console.log(`Server is running on http://localhost:${port}`);
    
})
