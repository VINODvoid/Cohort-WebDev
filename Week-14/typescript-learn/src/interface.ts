interface User {
    name:string,
    age:number,
    phone:number 
}

function displayUsers(user:User)
{
console.log(`The user name is ${user.name} and age is ${user.age} with the phone number ${user.phone}`);

}

let user1:User = {
    name:"vinod",
    age:23,
    phone:67
}
displayUsers(user1)


interface Person {
    firstName:string,
    lastName:string,
    age:number,
    email:string
}


function isLegal(people:Person):boolean
{
    if(people.age<=18)
    {
        return false
    }
    else{
        return true
    }
}


