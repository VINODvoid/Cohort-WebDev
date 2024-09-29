// Create a middleware function that logs each incoming request’s HTTP method, URL, and timestamp to the console



const express = require('express');

const app = express();

function middlewarefunction(req,res,next){
    const currentTime = new Date().toISOString()
    console.log("Method used is: ",req.method);
    console.log("Url is: ",req.url);
    console.log("Time Stamp is: ",currentTime);
    
    next();
}

app.use(middlewarefunction);

app.get("/sum",function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        sum : a+b,
    })

})
app.get("/substract",function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        substract : a-b,
    })
})
app.get("/divide",function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        divide : a/b,
    })
})
app.get("/multiply",function(req, res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        multiply : a*b,
    })
})


app.listen(3000,function(){
    console.log(`Server is running on http://localhost:${3000}`);
    
})