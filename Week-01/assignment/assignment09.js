// Write a function that takes an array of users as inputs and returns only the users who are more than 18 years old

arr = [
    {name:"Ravi",age:20},{name:"hemanth",age:45},{name:"shubam",age:17}
]



function canVote(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].age >= 18) {
            console.log(arr[i].name + " can vote , age is "+ arr[i].age);
        }
    }
}
canVote(arr)