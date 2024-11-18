function isEven(num){

    if(num % 2 == 0){
        return true;
    }else{
        return false;
    }
}

// let x = 11;
// if(isEven(x)){
//     console.log("even")
// }else{
//     console.log("odd")
// }

// for(let i= 1; i<=20; i++){
//     let res = isEven(i)
//     if(res){
//         console.log(`${i} is : Even`)
//     }else{
//         console.log(`${i} is : Odd`)
//     }
// }

function isPrime(num){
    for(let i=2; i<=num; i++){
        if(i%num == 0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(12));