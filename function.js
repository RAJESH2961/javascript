const number = [1, 2, 3, 4, 5];

//normal Function
let squa = number.map(fun);
function fun(element){
    return Math.pow(element, 2);
}
console.log(squa);

//function Expression

//map
let square = number.map(function (element){
    return Math.pow(element, 2);
});
console.log(square);

//reduce
let sum = number.reduce(sum1);

function sum1 (first, next){
    return first + next;
}
console.log(sum)

//filter
let odd = number.filter(oddnum);
function oddnum(element){
    return element % 2===0 ;
}
console.log(odd);

// TjStanley
let total = 0;
function add(...data){
    for (let i=0; i<data.length; i++){
        total +=data[i];
    }
    return total;
}
console.log(add(12,12,12,23,43,45));

// if we dont know the arguments length we can use two methods
// 1.Arbitary arguments
// 2.spread operator

//1.Function with Arbitary Arguments;

function summ(){
    let total =0;
    for(let i=0; i<arguments.length; i++)//arguments calculates the counts whuch we passed the parameters in functio call
        {
            total+=arguments[i];
        }
        return total;
}
console.log(summ(12,12,12,12));

// 2.Spread Operator
function totals(...data){
    let total =0;
    for(let i=0; i<data.length; i++){
        total = total+data[i];
    }
    return total;
}
console.log(totals(12,12,12));

//
let data = function(a,b){
    return a+b;
}
// console.log(data);//printing the function
console.log(data(12,12));//calling the function
