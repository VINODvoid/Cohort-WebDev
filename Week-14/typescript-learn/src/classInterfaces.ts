import { nodeModuleNameResolver } from "typescript";

interface Yan{
    name : string,
    age:number,
    greet(phrase:string):void
}

class Yen implements Yan {
    name :string;
    age:number;
    constructor(n:string,age:number)
    {
        this.name = n;
        this.age = age;
}
    greet(phrase:string):void{
        console.log(`${phrase} ${this.name}`);
   }
}

let y:Yen = new Yen("bolo",34);
y.greet("hello buddy");



abstract class IUser {
    name:string
    constructor (name:string)
    {
        this.name= name;
    }
    abstract greet():string;
}

class Lovable extends IUser
{
    name: string;
    constructor ( name : string)
    {
        super(name);
        this.name = name;
    }
    greet(){
        return "hello "+ this.name
    }
}
