const express = require("express");
const jwt = require('jsonwebtoken');

const app = express();
const JWT_SECRET = "newuser";
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
    res.json({
        message:"You are signed Up",
    })
    
})

// // returns random characters with length 32 
// function generateToken(){
//     const characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","y","z","x","w","q","1","2","3","4","5","6","7","8","9","0"];
//     let token = "";
//     for(let i=0;i<32;i++){
//         const randomNumber = Math.floor(Math.random()*characters.length);
//         token += characters[randomNumber];
//     }
//     return token;
// }

app.post("/sign-in",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const user = users.find(function(user){
        if(user.username == username && user.password == password)
        {
            // const token = generateToken();
            const token = jwt.sign({
                username:username,
            },JWT_SECRET)
            // user.token = token;// jwt doesn't need to storage because the token itself gets stored
            res.json({
                message:token,
            })
        }
        else{
            res.json({
                message:"User not found"
            })
        }
    })

})

app.get("/me",function(req,res){
    const  mytoken = req.headers.token;
    const decodedInfo= jwt.verify(mytoken,JWT_SECRET)
    const foundUser = users.find(user => user.username == decodedInfo.username)
    if(foundUser)
    {
        res.json({
            username:foundUser.username,
            password:foundUser.password,
        })
    }
    else{
        res.status(411).send({
            message: "Not Authorised !"
        })
    }
})

app.listen(port,function(){
    console.log(`Server is running on http://localhost:${port}`);
    
})
