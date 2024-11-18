function pattern6(n){
        let space = 0
        let stars = 0

        let spc=""
        let str =""

    
        for(let i=1; i<=n ; i++){

            space = n-i
            stars = (2*i) - 1

            spc=""
            str=""
    
            for(let j=1; j<=space; j++){
                spc+=" "
            }
            for(let k=1; k<=stars; k++){
                str += "*"
            }

            console.log(spc+str)    
        }

    

    for(let i=1; i<=n; i++){
        space = i;
        stars = (2*(n-i)) - 1

    

            spc=""
            str=""

        for(let j=1; j<=space; j++){
            spc+=" "
        }
        for(let k=1; k<=stars; k++){
            str += "*"
        }

        console.log(spc+str)
     }
}

pattern6(3)