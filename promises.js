// function walkDog(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("you walk the dog")
//         },3000);
//     });
// }
// function cleanKitchen(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("you clean the Kitchen")
//         },4000);
//     });
// }
// function takeoutTrash(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve("you Takeout Trash")
//         },1000);
//     });
// }

// walkDog().then(value => {console.log(value); return cleanKitchen()})
//         .then(value => {console.log(value); return takeoutTrash()})
//         .then(value => {console.log(value); console.log("You finished all tasks")})
        
function walkDog(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{

            const dogWalked = true;
            if(dogWalked){
                resolve("you walk the dog")
            }
            else{
                reject("you didnt the dog")
            }
        },3000);
    });
}
function cleanKitchen(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const kitchenCleaned = true;
            if(kitchenCleaned){
                resolve("you clean the Kitchen")
            }
            else{
                resolve("you DIdnt the Kitchen")
            }
        },4000);
    });
}
function takeoutTrash(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            const trashtaked = false;
            if(trashtaked){
                resolve("you Takeout Trash")
            }
            else{
                reject("you Didnt Trash")
            }
        },1000);
    });
}

walkDog().then(value => {console.log(value); return cleanKitchen()})
        .then(value => {console.log(value); return takeoutTrash()})
        .then(value => {console.log(value); console.log("You finished all tasks")})
        .catch(error => console.error(error))
        
        