const express = require('express');

const app = express();

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