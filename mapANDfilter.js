let numbers = [1, 2, 3, 4, 5];

const square1 = numbers.map(square);//the new array data will be stored

function square(square){
    return Math.pow(square, 2)
}
console.log(square1);

//Example-2
let students = ["Rajesh", "Balaji", "ram"]
let final_data = students.map(uppercase)
function uppercase(element){
    return element.toUpperCase();
}
console.log(final_data);

//ForEach returns Undefined
//map returns new array



let number = [1, 2, 3, 4, 5];
let evennum = number.map(even);

function even (element){
    return element%2 === 0;
}
console.log(evennum)

console.log(doubled = number.map(num => num*2));

//checking odd numbers
console.log(odd = number.filter(num => num % 2 !== 0));
//checking even numbers
console.log(odd = number.filter(num => num % 2 === 0));

const age = [16, 17, 54, 34, 67, 32];
console.log(vote = age.filter(vote => vote>18 ));
// console.log(typeof age[0]);
// ---------------------------or---------------------------

// const eligible = age.filter(vote);

// function vote(element){
//     return element>=18;
// }
// console.log(eligible)

const words = ["apple", "Banana", "Orange"];

console.log(words.filter(shortWords));

function shortWords(element){
    return element.length<6;
}