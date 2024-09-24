const express = require('express');

function checkSum(a){
    let sum  = 0
    for (let i = 0; i <= a; i++) {
        sum +=i;
    }
    return sum;
}
const app = express();

app.get('/',function(req,res){
    const a = parseInt(req.query.a);
    const ans = checkSum(a);
    res.send(ans.toString())
})
app.listen(8000,function () {
    console.log("Server is listening on port ",8000);
    })