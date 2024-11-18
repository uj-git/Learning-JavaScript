function SumOfDigits(x){
    let sum = 0;

    let num = x;
    while(num>0){
        let y = num%10;
        sum += y
        num  = Math.floor(num/10);
    }

    console.log(sum);
}

SumOfDigits(4123)
SumOfDigits(5349)