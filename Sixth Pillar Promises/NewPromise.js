function getRandomInt(max){a
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

x
.then(
    function fulfilHandler(value) {
        console.log("Inside Fulfil Handler with value", value);
    }, 
    function rejectHandler(value) {
        console.log("Inside Reject Handler with value", value);

    }
);
