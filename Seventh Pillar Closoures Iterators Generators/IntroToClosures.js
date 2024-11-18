function process(){
    let i=0;

    function innerProcess(){
        i+=1;
        return i;
    }

    return innerProcess;
}

let res = process();

console.log(res);

console.log("First time calling res", res());
console.log("Second time calling res", res());
console.log("Third time calling res", res());

/**
 * Colsure property remebers all those vairbales that are getting accessed inside your function whose scope might or might not be in your function
 * It remebers the memory location of all those variables
 * 
 */