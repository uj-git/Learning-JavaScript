console.log("Start of the file");

setTimeout(function timer1(){
console.log("Timer 1 Done")
}, 0);

for(let i=0; i<=10000000000; i++){}

let x =  Promise.resolve("Umang's Promise");

x.then(function res(value){
    console.log("Whose Promise", value)
})

setTimeout(function timer2(){
    console.log("Timer2 Done")
},0);

console.log("End of the File");