function createPromise(){
    return new Promise(function exec(resolve, reject){
        let x = setTimeout(function giveValue(){return 2}, 3000);

        if(x%2==0){
            resolve("successfull");
        }else{
            reject("unsuccessfull");
        }
    });
}

const p = createPromise();

console.log(p)