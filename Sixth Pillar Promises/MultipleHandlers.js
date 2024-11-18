function getRandomInt(max){
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeOut(){
    return new Promise(function executor(resolve, reject){
        setTimeout(function fn(){
            let num = getRandomInt(100);
            if(num%2==0){
                resolve(num);
            }else{
                reject(num);
            }
        }, 1000)
        
    });
}

console.log("Starting....");
let x = createPromiseWithTimeOut();
console.log("We Are Waiting.....");
console.log("Currently my Promise Object is like....", x);

console.log("Registering 1st Handler");

x
.then(
    function fulfilHandler(value) {
        console.log("Inside Fulfil Handler 1 with value", value);
        console.log("Promise After fullfilment", x);
        setTimeout(function t(){console.log("Ending 0s Timer 1")}, 0);
        console.log("Exitting the full handler 1");
    }, 
    function rejectHandler(value) {
        console.log("Inside Reject Handler 1 with value", value);
        console.log("Promise After fullfilment", x);
        setTimeout(function t(){console.log("Ending 0s Timer 1")}, 0);
        console.log("Exitting the reject handler 1");
    }
);

console.log("Registering 2nd Handler");

x
.then(
    function fulfilHandler(value) {
        console.log("Inside Fulfil Handler 2 with value", value);
        console.log("Promise After fullfilment", x);
        setTimeout(function t(){console.log("Ending 0s Timer 2")}, 0);
        console.log("Exitting the full handler 2");
    }, 
    function rejectHandler(value) {
        console.log("Inside Reject Handler 2 with value", value);
        console.log("Promise After fullfilment", x);
        setTimeout(function t(){console.log("Ending 0s Timer 2")}, 0);
        console.log("Exitting the reject handler 2");
    }
);

console.log("Ending....");

// for(let i=0 ; i<=10000000000; i++){}
// console.log("Ending The Loop");

setTimeout(function t(){console.log("Global Timer")}, 900);