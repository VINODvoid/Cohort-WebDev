import { UpdatedPropsOptional } from "./partial"
interface User {
    id:string,
    name:string,
    age:number,
    email:string,
    password:string
}

export type UpdatedProps = Pick<User , 'name' | 'age' | 'email'>


export function updateUser(Updatedprops:UpdatedPropsOptional):void {
    console.log(Updatedprops.name + " "+Updatedprops.age+" "+ Updatedprops.email);   
}

updateUser({
    name: "kalki", email: "hello@gmail.com",
    age:34
})


