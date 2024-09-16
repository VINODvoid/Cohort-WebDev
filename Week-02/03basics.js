// Functional Arguments 


// # Approach 1 
function sum(a,b)
{
    return a + b ;
}
function sub(a,b)
{
    return a - b ;
}
function divide(a,b)
{
    return a/b ;
}
function multiply(a,b)
{
    return a* b ;
}

// console.log(sum(2,5));


// # Approach 2 using functional arguments

function sum(a,b)
{
    return a + b ;
}
function sub(a,b)
{
    return a - b ;
}
function divide(a,b)
{
    return a/b ;
}
function multiply(a,b)
{
    return a* b ;
}

function doOperations(a,b,func)
{
    return func(a,b)
}
console.log(doOperations(3,4,sub))



 