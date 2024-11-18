//HOF -> Higher Order Function
function f(x, fn){
    /**
     * x ->  number
     * fn -> function
     * 
    */

    console.log(x); 
    fn();
}

function fn(){
    console("I am an expression passed to HOF");
}

f(10, fn);