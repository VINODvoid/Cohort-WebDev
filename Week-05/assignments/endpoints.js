// Create a middleware that counts total number of requests sent to a server. Also create an endpoint that exposes it

const express = require('express');

const app = express();

let requestCount = 0;
function requestCalculator(req,res,next){
    requestCount +=1;
    next();
}
app.use(requestCalculator);
app.get("/",function(req,res){
    console.log("Total number of request sent to server is ",requestCount);
    res.send("used middleware")
    
});

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