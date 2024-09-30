// normal format for function
// function sum(a,b)
// {
//     return a+b;
// }

// arrow function 
const sum = (a,b) => {return a+b}

console.log(sum(2,4));



// Problem statement : Given the array , multiply each value by 2

const arr = [1,2,3,4,5]
 // expected ouptut = [2,4,6,8,10]
// const output =[];
// for(let i=0;i<arr.length;i++)
// {
//     output.push(arr[i]*2)
// }
// console.log(output)


// MAP function 


// function transform(i){
//     return i*2;
// }
const ans = arr.map((i)=>i*2)
console.log(ans);




// FILTER function 
const arr1 = [1,2,3,4];

function filterLogic(n)
{
    if(n%2 == 0)
    {
        return true;
    }
    else{
        return false;
    }
}
const even = arr1.filter(filterLogic);
console.log(even);
