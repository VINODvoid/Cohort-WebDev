import {PrismaClient} from  "@prisma/client";

const client = new PrismaClient();

async function createUser(){
const customer = await client.customer.findFirst({
    // data:{
    //     username:"kalki",
    //     age:23,
    //     email:"kalki@void.com",
    //     password:"kalkivoid"
    // }
    where:{
        id:1
    },
    select:{
       username:true 
    }
});
console.log(customer?.username)

}
createUser();
