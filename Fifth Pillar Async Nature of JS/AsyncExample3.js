console.log("Hello World");

for(let i=0 ; i<3; i++){
    setTimeout(function exec(){
        console.log("Timer Done:" + i)
    }, 10000);
}

for(let i=0 ; i<=10000000000; i++){

}

console.log("End");