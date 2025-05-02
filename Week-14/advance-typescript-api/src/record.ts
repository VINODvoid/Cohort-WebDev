// type Students ={
//     name:string,
//     standard :string,
//     grades : string
// }

// type StudentType = {[key:string]:Students}

// ugly way of adding  object into the objects 

type StudentType = Record<string ,{
        name:string,
    standard :string,
    grades : string
}>


// gives same functionality with better readability

const students:StudentType = {
    "key1" :{
        name:"student1",
        standard : "8",
        grades:"F"
    },

}



console.log(students);
