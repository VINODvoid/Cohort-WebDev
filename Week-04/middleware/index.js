const express = require('express');

const app = express();

// function to check if person is old enough
function oldEnough(age)
{
    if(age>=14){
        return true
    }
    else{
        return false
    }
}

function oldEnoughMiddleware(req,res,next)
{
    const age = req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.status(411).json({
            message : "Not old enough for this ride"
        })
    }
}

// First approach to add middlewre to the routes 
// app.get("/ride1",oldEnoughMiddleware,function(req,res){
//         res.send("you can go to ride 1")
// })
// app.get("/ride2",oldEnoughMiddleware,function(req,res){
//         res.send("you can go to ride 2")
// })

// Second Approach to set globally set middleware for all routes
app.use(oldEnoughMiddleware);

app.get("/ride1",function(req,res){
        res.send("you can go to ride 1")
})
app.get("/ride2",function(req,res){
        res.send("you can go to ride 2")
})
app.listen(3000,function(){
    console.log("http://localhost:",3000);
    
})