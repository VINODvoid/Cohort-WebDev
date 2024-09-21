const fs = require("fs");


function main(filePath){
    fs.readFile(filePath,'utf-8',function(err,data){
        console.log(data)
    })
}
