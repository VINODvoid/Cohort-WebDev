const express = require("express");
const jwt = require("jsonwebtoken")

const port = 3000;
const app  = express();
app.use(express.json());
const JWT_SECRET = "myscretcode"
let users = [];

function auth(req,res, next){
    const token = req.headers.token;
    const decodedInfo = jwt.verify(token,JWT_SECRET);
    if(decodedInfo.username)
    {
        req.username = decodedInfo.username
        next();
    }
    else{
        res.json({
            message:"Not Authorised !!",
        })
    }
  
}

app.post("/sign-up",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    if(username.length < 8 || password.length <8)
        {
            res.send("username is too small , minimum 8 characters")
        }
     else{   
        users.push({
            username:username,
            password:password,
        })
        res.status(200).send({
            message : "You are signed Up !!!"
        })
    }
    })
app.post("/sign-in",function(req,res){
    const username = req.body.username;
    const password = req.body.password;
    
    const foundUser = users.find(user => username == user.username && password == user.password)

    if(foundUser)
    {
        const token = jwt.sign({
            username:username
        } , JWT_SECRET);
        res.header("token",token)
        res.send({
            token : token,
            
        })
    }
    else{
        res.send({
            message:"User Not Found !!!"
        })
    }
    
})
app.get("/me",auth, function(req,res){
    const foundUser = users.find(user =>  user.username ==  req.username)

    if(foundUser)
    {
        res.send({
            username: foundUser.username,
            password : foundUser.password,
            
        })
    }
    else{
        res.status(411).send({
            message:"Not Authorised !!"
        })
    }
})

app.listen(port,function(){
    console.log(`Server is running on http://localhost:${port}`);
    
})


