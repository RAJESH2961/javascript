let person1 = {
    name : "Rajesh",
    age : 21,
    greet : ()=> console.log(`Hello ${person1.name}`),
    ages : ()=> console.log(`Hello ${this.age}`),
}
person1.greet();
person1.ages();

//thiskeyword doent work in arrow functions
 let person2 = {
    name : "Rajesh",
    age : 21,
    // greet: ()=> console.log(`Hello ${this.name} `);
 }