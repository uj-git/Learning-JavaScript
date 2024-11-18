function gcd(x, y){

    let hcf = 1;

    for(let i=1; i<= Math.min(x,y); i++){
        if(x%i == 0 && y%i==0){
            hcf = i
        }
    }

    console.log(hcf)
}

gcd(25,99)