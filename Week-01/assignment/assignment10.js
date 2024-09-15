// Create a function that takes an array of objects as input,
// and returns the users whose age > 18 and are male


const users = [
    { name: 'John', age: 25, gender: 'male' },
    { name: 'Sarah', age: 22, gender: 'female' },
    { name: 'Tom', age: 16, gender: 'male' },
    { name: 'Mike', age: 30, gender: 'male' },
    { name: 'Anna', age: 28, gender: 'female' }
];


function person(arr) {
    return arr.filter(user => user.age >= 18 && user.gender == 'male')
}

console.log(person(users));
