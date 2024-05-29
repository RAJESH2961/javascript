let numbers = [1,2,3,4,5];

numbers.forEach(display);

function display(display_data){
    console.log(`Displaying Data ${display_data}`);
}

//Doubling the Array Value

numbers.forEach(data);
numbers.forEach(square);
numbers.forEach(cube);//for Each returns one value ata time we can process it 

function data(number, index, aray){
    console.log(`The value is ${number} Index is ${index} array dat is ${aray}`)
}

function square(data, index, array){
    console.log(` The value is ${array[index]} and the square is ${data **2 }`);
}

function cube(data, index, array){//Accepting the data whic is provided by ForEach we can also accept 3 values like
    //  data which is actual data,index of an current elment which is being processsed and total array
    array[index] = Math.pow(data, 4);
    console.log(data);
    
}

//convert all strings to uppercase in an array

let fruits = ['apple', 'banana', 'orange']

fruits.forEach(uppercase);

function uppercase(data1, index, array){
    // finalData = array[index] = data1.toUpperCase();
    // console.log(finalData);

}

fruits.forEach(capitalize);

function capitalize(data1, index, array){
    finalData1 = array[index] = data1.charAt(0). toUpperCase() + data1.slice(1);
    console.log(finalData1);

}