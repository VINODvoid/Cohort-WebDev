// Write a function that takes a new object as input which has name , age  and gender and greets the user with their gender (Hi Mr/Mrs/Others harkirat, your age is 21)

let user ={
    name:"Kalki",
    age:20,
    gender:"bi-sexual",
}

function greet(user)
{
    let fname = ''
    if (user.gender == "male")
    {
        fname = 'Mr'
    }
    else if (user.gender == 'female'){
        fname = 'Mrs'
    }
    else {
        fname = 'Others'
    }
    console.log( "Hi "+fname +" "+ user.name+" , your age is "+ user.age);
}

greet(user)


// Also tell the user if they are legal to vote or not


function canVote(user)
{
    let canVote = false
    if(user.age >= 18)
    {
        canVote = true
    }
    if(canVote)
    {
        console.log("Can Vote");
    }
    else
    {
        console.log("Can Vote");
    }
    
}
canVote(user)