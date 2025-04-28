type checkAge = string | number;


function ageChecker (age:checkAge)
{
    
    if(typeof(age) == "string")
    {
        console.log("Please provide the age ");
    }
    else{
        console.log(age);
        
    }
}


ageChecker(34);
ageChecker("78");