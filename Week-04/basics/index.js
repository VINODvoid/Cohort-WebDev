const express = require('express');

const app = express();
// function checkSum(a){
//     let sum  = 0
//     for (let i = 0; i <= a; i++) {
//         sum +=i;
//     }
//     return sum;
// }

// app.get('/',function(req,res){
//     const a = parseInt(req.query.a);
//     const ans = checkSum(a);
//     res.send(ans.toString())
// })
var users = [
    {
        name:"vinod",
        kidneys :[{
            healthy:false,
        },
        {
            healthy:true,
        }
        ],
        healthy:true,
    },
]

app.get("/",function(req,res){
    const kidneys = users[0].kidneys
    const numberOfKidneys = users[0].kidneys.length;
    let healthyKidneys = 0
    for (let i = 0; i < numberOfKidneys; i++) {
        if(kidneys[i].healthy === true){
            healthyKidneys +=1;
        }
    }
    const unhealthyKidneys = numberOfKidneys-healthyKidneys;
    res.json(
        {
            healthyKidneys,
            unhealthyKidneys,
            numberOfKidneys,
        }
    )

    
})



app.listen(8000,function () {
    console.log("Server is listening on port ",8000);
    })