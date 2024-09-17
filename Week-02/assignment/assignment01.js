//  Display content of files using promisifed version
const fs = require('fs')

function readFilePromisified(){
    return new Promise(function(resolve,reject){
        fs.readFile('../sample.txt','utf-8',function(err,data){
            if(err)
            {
                reject("Error while Reading")
            }
            else{
                resolve(data)
            }
        })
    })
}
readFilePromisified()
.then(function(message){
    console.log(message);
})
.catch(function(error){
    console.error(error);
    
})

