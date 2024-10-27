const express = require('express');

const PORT=8000
const app = express();

function authenticate(req,res,next)
{
     
}

// - POST /signup
// - POST /login
// - POST /todo (authenticated)
// - GET /todos (authenticated)
app.get("/todos",authenticate,function(req,res){
    res.send("Hello Bitch  i am back !!")
})
app.post("/sign-up",function(req,res){})
app.post("/login",function(req,res){})
app.post("/todo",authenticate,function(req,res){})


app.listen(PORT,function(){
    console.log("Server is listening on",PORT);
})