function createPromise(){
    return new Promise(function exec(resolve, reject){
        setTimeout(function(){
            console.log("Returning the Promise");
            reject("Done");
        }, 1000);
    });
}

let p = createPromise();

p.then(function fulfilHandler1(value){
    console.log("We Fulfilled1 with a value", value);
}, function rejectHandler1(value){
    console.log("We Rejected1 with a value", value);
})

p.then(function fulfilHandler2(value){
    console.log("We Fulfilled2 with a value", value);
}, function rejectHandler2(value){
    console.log("We Rejected2 with a value", value);
})

for(let i=0; i<=10000000000; i++){}

console.log("End");