function Person(name, age, gender){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
//creating an Instance for that objevt
let person1 = new Person("Rajesh", 21, "male")
let person2 = new Person("Rajesh", 21, "male")

console.log(person1.name);
console.log(person2.age);

//Constructor with default values
function Nationality(name, age){
    this.name =name;
    this.age = age;
    this.nationality = "Indian";
}
let per = new Nationality("Rajesh",21)
console.log(per.nationality);

//constructor Function 
function Data (fname, lname, age){
    this.fname = fname ;
    this.lname = lname;
    this.age = age;
    this.fullname = function (){return this.fname+ " " +this.lname};
}
let data1 =new  Data("Rajesh", "Gangadharam", 21)
console.log(data1.fullname());
