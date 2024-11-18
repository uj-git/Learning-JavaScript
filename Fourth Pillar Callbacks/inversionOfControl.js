let arr = [1,0,6,5,3,4,7,9,8,2];
arr.sort(function cmp(a,b){
    return a-b;
})

console.log(arr);


//Inversion of Control

function doTask(x, fn) {
    fn(x*x);
    fn(x*x*x);
}

doTask(10, function execute(num){
    console.log("Num is", num);
})