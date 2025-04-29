interface User {
    name:string,
    age:number,
}

function sumOfAge(user1:User , user2:User):number
{
    return user1.age + user2.age
}


let totalAge = sumOfAge({name:"oushen",age:30},{name:"ohoun",age:20});
console.log(totalAge);
