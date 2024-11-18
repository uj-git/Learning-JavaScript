function pattern(n){
for(let i=1 ; i<=n ; i++){
    let star  = ""
    for(let j=1; j<=n ; j++){
        star += "*"
    }
    console.log(star);
}
}

pattern(4);
pattern(10);