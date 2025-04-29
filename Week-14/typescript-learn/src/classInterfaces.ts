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

