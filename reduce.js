//reduce() reduces an array of an elements into an single value
let cart = [20, 30, 1200, 6700]

let final_data = cart.reduce(sum);
console.log(final_data);

function sum(prev, current){
    return prev + current;
}
//first Iteration
// 0,20 --> returns 20
// 20,30 --> returns 50
// 50,1200 --> returns 1250
// 1250,6700 --> returns 7950

//returns Maximum element in the array
const grades = [10, 20, 132, 45, 56];

console.log(grades.reduce(max));

function max(accumulator, value){
    return Math.max(accumulator, value);
}

// Visual Representation
//10, 20 --> 20
// 20,132  -->132
// 132,45 -->132
// 132, 56 -->132
console.log(Math.max(10, 20, 30, 40, 50))
