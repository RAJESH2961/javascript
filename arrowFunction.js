//Normal function
function hello(){
    console.log("Hello");
}
hello();

// ARROW FUNCTION
// syntax (parameters) =>{block of code};

let greet = () => console.log("Hello welcome !");
greet();
//Function with multiple lines
let greets = () => {console.log("Hello welcome !")
                    console.log("welcome Bro")
};
greets();

//function with paramanets

let welcome = (name, age) => {
    console.log(`Hello ${name}`);
    console.log(`You are ${age}`);
};
welcome("Rajesh", 21);

let print1 = ((name) =>{
    console.log(`Hello ${name}`);
});
print1("rajesh");
//Time out Function
setTimeout(()=> console.log("Hello"), 3000);


//Arrow functions with map
let numbers = [1, 2, 3, 4, 5];
console.log(numbers.map((element) =>  Math.pow(element, 2)))
console.log(numbers.map((element) =>  Math.pow(element, 4)))

console.log(numbers.filter((element) => (element %2 ===0)))
console.log(numbers.filter((element) => (element %2 !==0)))
console.log(numbers.reduce((element,prev) => (element +prev)))

//TJ Stanley
//Arrow functions
let data = () => {console.log("welcome")}
let data1 = (a,b) => {return a+b;}
console.log(data1(12,12));
//Arrow With Filter
let num = [1, 2, 3, 4, 5];
let even = num.filter((data) => data % 2===0 )
console.log(even);

//2.using map
let doubled = num.map((data) => Math.pow(data, 2));
let doubled1 = num.map(num => num*2)
console.log(doubled1);

//2.using Filter
//It will filters based on some conditions
let square = num.filter( data => data>4 )
console.log(square)

let fruits = ["fruits", "apple", "banana", "orange", "grapes"]

let da =fruits.filter( da => da.length<=5 )
console.log(da);
//CODE - Explanation
// filter () filters the data based on some conditions here the data
// is passed into an function and filters based on conditions


//3.using reduce()
let number = [1, 2, 3, 4, 5];
let sum = number.reduce((sum, number) => sum + number, 0);
console.log(sum);

// here the reduce () passes the ecah data to a number parameter and it will added to sum parameter and returns single value
// 0 is the default value