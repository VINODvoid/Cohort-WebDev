// Write a function called sum that finds the sum from 1 to a number


function sum(number)
{
    sum = 0
    for(let i=0;i<=number;i++)
    {
        sum +=i
    }
    return sum;
}

let value = sum(5)
console.log(value);
