// Find()
// Given an array of user objects, use the find() function to return the user with the username "johnDoe".
const users = [
    { id: 1, username: 'alice', age: 25 },
    { id: 2, username: 'johnDoe', age: 28 },
    { id: 3, username: 'charlie', age: 32 }
  ];

  
const user = users.find(user => user.username == "johnDoe")
console.log(user);

// Create an array of numbers and find the first even number using the find() function.

const arr = [1,2,3,4,5,6,7,8,9,10];
const evenNum = arr.find(num => num%2 == 0);
console.log(evenNum);


// Arrow Function
// Convert the following function to an arrow function
// function add(a, b) {
//   return a + b;
// }
const add = (a,b) => a+b;
console.log(add(12,4));

// Create an array of strings and use an arrow function inside map() to convert all strings to uppercase.
const strarr = ["abc","def","ghi","jkl","mno","pqr","stu","vwx","yz"]
const upperCase  = strarr.map(str => str.toUpperCase())
console.log(upperCase);


// Write a function using arrow syntax that checks if a number is a prime number.
const primeNum = (n) => {
    for(let i= 0 ;i<n-1;i++)
    {
        if(n == 0 && n == 1){
            return true
        }
        if(!n%i == 0)
        {
            return true
        }
        else{
            return false
        }
    }
}

console.log(primeNum(8));



// MAP function 
// Given an array of numbers, return a new array where each number is doubled:

const numbers = [1, 2, 3, 4, 5];

const doubleNum = numbers.map(num => num *num)
console.log(doubleNum);

// Given an array of objects representing books, use map() to return an array of just the titles:

const books = [
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'Moby Dick', author: 'Herman Melville' },
    { title: '1984', author: 'George Orwell' }
  ];

  
const bookTitles = books.map(book =>book.title )
console.log(bookTitles);

// Use map() to convert an array of numbers from  Celsius to  Fahrenheit.

const temp = [34,27,24,48,13]
const fahrenheittemp = temp.map(cel => cel + 32);
console.log(fahrenheittemp);

// FILTER function
// Given an array of numbers, use filter() to return only the numbers greater than 10:
const number = [5, 12, 8, 130, 44];
const greaterNum = number.filter(ele => ele > 10 );
console.log(greaterNum);
