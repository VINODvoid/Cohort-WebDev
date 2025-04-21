
// greeting("kal");
// greeting("kalki");
// greeting("kikal");


// function sumNum(a:number,b:number)
// {
//     return a+b;    
// }
// console.log(sumNum(2,7));


// function isLegalAge(age:number):boolean
// {
//     if(age<=18)
//     {
//         return false;
//     }
//     else{
//         return true;
//     }
// }

// console.log(isLegalAge(23));


function greeting(firstName:string)
{
    console.log(`Hello ${firstName}`);
}
function DelayedFunction(fn: (name:string)=>void)
{
    setTimeout(()=>{
        fn("kalki")
    },200)
}
DelayedFunction(greeting)

// DelayedFunction(function(){
//     console.log("Hi");  
// })