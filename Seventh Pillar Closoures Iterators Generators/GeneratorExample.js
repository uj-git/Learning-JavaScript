function* fetchNextElemenet(){
    console.log("Inside Generator");
    const x= 10;
    yield 11;
    console.log("Entering after a yield");
    const y = x + (yield 30);
    console.log("Value of y is" , y);
}

console.log("Start");
const iter = fetchNextElemenet();
console.log("Called Genrator");
console.log("first" , iter.next());
console.log("second", iter.next());
console.log("second", iter.next(13));