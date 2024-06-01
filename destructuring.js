let data = {
    name : "rajesh",
    age : 24,
    father : false
}

function greet ({name, age=30, father}){
    console.log(`Hello  ${name}`)
    console.log(`You are  ${age} year's old`)
    if(father){console.log('Congratulation you are father now')
    }
}
greet(data);
//what if the data is huge/ complex
let data1 ={
    name : "Rajesh",
    age : 21,
    is_married : true,
    own_house :false,
    gender : 'male',
    student : true,
    istrainer : true,
}
//here wll use the parameters which we want and pass the remailing as a rest
function welcome({name, age, ...data1}){
    console.log(`Welcome ${name} `)
    // console.log(`Welcome ${own_house} `)
    console.log(`Welcome ${age} `)
    // console.log(`Welcome ${is_married} `)
    // console.log(`Welcome ${gender} `)
}
welcome(data1)

