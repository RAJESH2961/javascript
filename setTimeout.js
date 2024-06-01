//setTimeout(callback,delay)
setTimeout(()=> console.log(Hello), 3000);
let time = setTimeout(()=> console.log(Hello), 3000);

clearTimeout(time);