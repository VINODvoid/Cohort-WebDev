const fs = require("fs");


function main(filePath){
    fs.readFile(filePath,'utf-8',function(err,data){
        let count = 0;
        for (let i = 0;i<data.length;i++){
            if(data[i] === " ")
                count +=1;
        }
        count +=1
        console.log("There are "+count+" words in file")
    })
}
main("./a.txt")