// Write a function that takes an array of numbers as input, and returns a new array with only even values. Read about filter in JS


function isEven(arr)
{
    let arr1=[]
    for (let i = 0; i <= arr.length; i++) {
        if(arr[i] %2 == 0)
        {
            arr1.push(arr[i])
        }
    }
    return arr1
}
arr =[1,2,3,4,5,6,7,8,9,10]
console.log(isEven(arr));
