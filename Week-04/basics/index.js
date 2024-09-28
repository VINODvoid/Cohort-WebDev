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
        ],
        healthy:true,
    },
]
app.use(express.json());

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

app.post("/",function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy,
    });
    res.json({
        users,
        message:"Done"
    })
})

app.put("/",function(req,res){
    for(let i=0; i<users[0].kidneys.length;i++)
    {
        users[0].kidneys[i].healthy = true;
    }
    res.json({
        users,
        message:"Done"
    })
})

app.delete("/",function(req,res){
    if(atleastOneUnhealthyKidneys())
    {
        const newKidneys = [];
        for(let i=0; i<users[0].kidneys.length;i++)
        {
            if(users[0].kidneys[i].healthy == true){
                newKidneys.push({
                    healthy:true,
                })
            }
        }
        users[0].kidneys = newKidneys;
        res.json({
            usersKidneys : users[0].kidneys,
            message:"Deleted Unhealthy Kidneys"
    
        })
    }
    else{
        res.json({
            message:"You have zero bad kidneys"
        })
    }
})
function atleastOneUnhealthyKidneys(){
    for(let i=0; i<users[0].kidneys.length;i++)
        {
            if(!users[0].kidneys[i].healthy ){
                return true;
                
            }
        }
}
app.listen(8000,function () {
    console.log("Server is listening on port ",8000);
    })