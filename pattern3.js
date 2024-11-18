function pattern3(n){

    for(let i=1; i<=n; i++){

        let space = n-i
        let star = i
        let spc = ""
        let str = ""
        
        for(let j=1; j<=space ; j++){
            spc += " "
        }

        for(let k=1 ; k<=star ; k++){
            str+="*"
        }
        
        console.log(spc+str)

    }
}

pattern3(5)