interface User {
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

type UpdatedProps = Pick<User , 'name' | 'age' | 'email'>


function updateUser(Updatedprops:UpdatedProps):void {
    console.log(Updatedprops.name + " "+Updatedprops.age+" "+ Updatedprops.email);   
}

updateUser({
    name: "kalki", email: "hello@gmail.com",
    age: 45
})


