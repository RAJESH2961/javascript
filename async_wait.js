        
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
            const trashtaked = true;
            if(trashtaked){
                resolve("you Takeout Trash")
            }
            else{
                reject("you Didnt Trash")
            }
        },1000);
    });
}

async function doWork (){
    const dogResult = await walkDog();
    console.log(dogResult);

    const cleanKitchenResult = await cleanKitchen();
    console.log(cleanKitchenResult); 

    const trashResult = await takeoutTrash();
    console.log(trashResult); 

    console.log("All Tasks finished");

}
doWork();
        
        