function pattern5(n){
    for(let i=1; i<=n ; i++){

        let sapce = i-1
        let star = n-i;

        let spc=""
        let str = "*"

        for(let j=1; j<=sapce; j++){
            spc+=" "
        }
        for(let k=1; k<=star; k++){
            str+="*"
        }

        console.log(str+spc)
    }
}

pattern5(5)