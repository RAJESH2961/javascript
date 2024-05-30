let names = ["Rajesh", "Balaji", "monika", "Bharathi", "Gangadharam"];
//for loop
for(let i=0; i<names.length; i++){
    console.log(names[i]);
}

//for of loop
console.log("FOR OF LOOP");
for(let name of names){
    console.log(name);
}

//for in loop are used when we have to access the objects

let user = {
    name : "rajesh",
    age : 21,
    gender : "male",
    is_married : false
}
console.log("For In loop");
for(let data in user){
    console.log(`key : ${data}`);
    console.log(`value : ${user[data]}`);

}

//sepreating the values and keys and stores it into seperate array
arr_keys = Object.keys(user);
arr_value = Object.values(user);
console.table(arr_keys);
console.table(arr_value);