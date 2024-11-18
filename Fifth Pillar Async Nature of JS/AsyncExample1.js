function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i=0; i<=10000000000; i++){}
    console.log("loop ends");
}

function timeConsumingByRunTimeFeature(){
    console.log("Start Timer");
    setTimeout(function exec(){
        console.log("End Timer")
    }, 5000);
}

console.log("Hi");


timeConsumingByLoop();
timeConsumingByRunTimeFeature();
timeConsumingByLoop();

console.log("By");