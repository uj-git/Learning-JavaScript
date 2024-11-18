function timeConsumingByLoop(){
    console.log("loop starts");
    for(let i=0; i<=10000000000; i++){}
    console.log("loop ends");
}

function timeConsumingByRunTimeFeature1(){
    console.log("Start Timer 1");
    setTimeout(function exec1(){
        console.log("End Timer 1");
        for(let i=0; i<=10000000000; i++){}
    }, 5000);
}

function timeConsumingByRunTimeFeature2(){
    console.log("Start Timer 2");
    setTimeout(function exec2(){
        console.log("End Timer 2");
    }, 0);
}

function timeConsumingByRunTimeFeature3(){
    console.log("Start Timer 3");
    setTimeout(function exec3(){
        console.log("End Timer 3");
    }, 200);
}

console.log("Hi");

timeConsumingByLoop();
timeConsumingByRunTimeFeature1();
timeConsumingByRunTimeFeature2();
timeConsumingByRunTimeFeature3();
timeConsumingByLoop();

console.log("By");