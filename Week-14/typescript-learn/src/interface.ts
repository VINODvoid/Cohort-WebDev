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


let user:Person = {
    firstName:"kal",
    lastName:"lak",
    age:34,
    email:"kallak@gmail.com"
}

console.log(isLegal(user)?"Legally to Vote":"Not Able to Vote");


let user2 : {
    firstName:string,
    lastName:string,
    age:number,
} = {
    firstName:"nod",
    lastName:"in",
    age:45
}

console.log(user2);


interface Address {
    city:string,
    country:string,
    pincode:number
}

interface Employee{
    name:string,
    age:number,
    manager ?: {
        status : boolean,
        leads : number,
    }
    address ?: Address
}

interface Office {
    address:Address
}
let employee1:Employee  = {
    name:"raman",
    age:34,
    manager:{
        status:true,
        leads:5
    }
}
let employee2 :Employee= {
    name:"ragav",
    age:41
}
function employeDetails(employee : Employee):void
{
    console.log("The Details of Employee are: "+employee.name + employee.age+ employee.manager?.leads  + employee.manager?.status)
}

employeDetails(employee1);
employeDetails(employee2);
