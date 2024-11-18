function pattern4(n){

    for(let i=1; i<=n ; i++){
        let space = n-i
        let stars = (2*i) - 1

        let spc=""
        let str =""

        for(let j=1; j<=space; j++){
            spc+=" "
        }
        for(let k=1; k<=stars; k++){
            str += "*"
        }

        console.log(spc+str)
    }

}

pattern4(5)