import { NotEmittedTypeElement } from "typescript";

function maxValue(arr:number[]):number
{
    let max = 0;
    for (let index = 0; index < arr.length; index++) {
        if(arr[index]>max)
        {
            max= arr[index];
        }
    }
    return max;
}



let arr:number[]= [2,67,3,78,23,567,2334,23,567];
console.log(maxValue(arr));




interface user {
    firstName : string,
    lastName:string,
    age:number
}

let people:user[] = [{firstName:"bheem",lastName:"chooota",age:12},{firstName:"chutki",lastName:"laudu",age:19},{firstName:"jaggu",lastName:"monkey",age:21}]


function isLegal(person:user[]) : user[]
{
    // let legalPeople = [];
    // for(let i = 0;i<person.length;i++)
    // {
    //     if(person[i].age > 18 )
    //     {
    //         legalPeople.push(person[i])
    //     }
    // }
    // return legalPeople;

    
    return person.filter((person)=>{
        person.age>18;
    })
}


console.log(isLegal(people));