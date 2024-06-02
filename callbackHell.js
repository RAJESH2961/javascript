//Call back hell is a situation in javascript where call backs are nested with another call back.

function task1(callback){
    setTimeout(()=>{
        console.log("Task-1 Completed");
        callback();
    },3000);
}
function task2(callback){
    setTimeout(()=>{
        console.log("Task-2 Completed");
        callback();
    },1200);
}
function task3(callback){
    setTimeout(()=>{
        console.log("Task-3 Completed");
        callback();
    },2000);
}
function task4(callback){
    setTimeout(()=>{
        console.log("Task-4 Completed");
        callback();
    },4000);
}

task1(()=>{
    task2(()=>{
        task3(()=>{
            task4(()=>{console.log("All taskes are completed")})
        })
    })
})