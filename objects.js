let data = {
    name : "rajesh",
    age : 24,
    laptop : {
        brand : "Asus",
        processor : 'i7',
        'memory storage' : '12gb 1tb',
    }
}
// console.log(data.laptop.brand.length);
console.log(data.name?.length)//it will throw an undefined if there is no data present
console.log(data);
//deleting the object
delete data.laptop
console.log(data);


//BRO CODEE
let person = {
    name : "Rajesh",
    age : 21,
    gender : "male",
    greet : () => console.log("Hello"),
}
person.greet()