// Write a function that takes a user as an input and greets them with their name and age

function greet(user)
{
    return console.log("Hi there ! "+ user.name + " and yours age is " + user.age);
}

let person ={
    name:"Kalki",
    age:20
}

greet(person)