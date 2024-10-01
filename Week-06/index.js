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
    res.json({
        message:"You are signed Up",
    })
    
})
// returns random characters with length 32 
function generateToken(){
    const characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","r","s","t","u","v","y","z","x","w","q","1","2","3","4","5","6","7","8","9","0"];
    let token = "";
    for(let i=0;i<32;i++){
        const randomNumber = Math.floor(Math.random()*characters.length);
        token += characters[randomNumber];
    }
    return token;
}
app.post("/sign-in",function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    const user = users.find(function(user){
        if(user.username == username && user.password == password)
        {
            const token = generateToken();
            user.token = token;
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

app.listen(port,function(){
    console.log(`Server is running on http://localhost:${port}`);
    
})
