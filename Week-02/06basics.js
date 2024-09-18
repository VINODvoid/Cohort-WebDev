// Q: Write code that
// logs hi after 1 second
// logs hello 3 seconds after step 1
// logs hello there 5 seconds after step 2


// CallBack Hell

// setTimeout(function(){
//     console.log("Hi");
//     setTimeout(function(){
//         console.log("Hello");
//         setTimeout(function(){
//             console.log("Hello There");
            
//         },5000)
//     },3000)
    
// },1000)

// Promisified Version

function setTimeoutPromise(duration)
{
    return new Promise(function(resolve,reject){
        setTimeout(resolve,duration)
    })
}

setTimeoutPromise(1000)
.then(function(){
    console.log("Hi");
    return setTimeoutPromise(3000)
})
.then(function(){
    console.log("Hello");
    return setTimeoutPromise(5000)
})
.then(function(){
            console.log("Hi There");
        })


let str = "asd";
const str1= str.split("s").sort().join(".s")
console.log(str1);
