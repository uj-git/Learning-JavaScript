/*
    map function
    it takes a function as argument and returns a new array
    in which all the values are populated by the function
*/

function sqaure(ele){
    return ele*ele;
}

function cube(ele){
    return ele*ele*ele;
}

function isEvenOrOdd(ele){
    return (ele % 2) == 0;
}

const arr = [1,2,3,4,5];



const result = arr.map(cube);

console.log(result);


/*
    Custom Mapper
*/

function customMap(arr, func){
    let result = []

    for(let i=0; i<=arr.length; i++){
        result.push(func(arr[i]));
    }
    return result;
}

const newArr = customMap(arr, isEvenOrOdd);

console.log(newArr);

/*
    Filter Function
*/

const filterRes = arr.filter(isEvenOrOdd);
console.log(filterRes);

/*
    Reduce function

 
*/

function sum(prevRes , currVal){
    return prevRes + currVal;
}

const reduceRes = arr.reduce(sum);
console.log(reduceRes);