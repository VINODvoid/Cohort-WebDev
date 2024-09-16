const fs = require('fs');


// Synchronous 
const contents1 = fs.readFileSync('01basics.js','utf-8');
console.log(contents1);
const contents2 = fs.readFileSync('02basics.js','utf-8');
console.log(contents2);


// Asynchronous 
function read(err,data)
{
    if (err) {
        console.log("Error Found !!");
    } else {
        console.log(data);
    }    
}
fs.readFile('./03basics.js','utf-8',read)
fs.readFile('./01basics.js','utf-8',read)
console.log("Done ! :)");


