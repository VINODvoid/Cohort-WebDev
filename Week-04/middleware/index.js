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


app.get("/ride1",function(req,res){
    const age = req.query.age;
    if(oldEnough(age))
    {
        res.send("you can go to ride 1")
    }
    else{
        res.status(411).json({
            message : "Not old enough for this ride"
        })
    }
})
app.listen(3000,function(){
    console.log("http://localhost:",3000);
    
})