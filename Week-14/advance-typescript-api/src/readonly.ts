const a:number[] = [1,2,3,4];

a[0] = 100;
console.log(a);


// even though we have assingned const , the data is changed because the reference of the variable is not changed , the data internally can be changed 




type Angels = {
    readonly name : string,
    realm:string,
    age:number
}

let black:Readonly<Angels> =  {
    name: "angels",
    age: 306,
    realm: "hell",
}

// so by readonly property we can make one of the pairs constants after initialisation

// by using Readonly<> is makes whole type as constant internally too.
console.log();
