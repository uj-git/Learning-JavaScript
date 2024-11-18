let x = 10
let y = "10"

console.log(y-x); // "10" -> toNumber("10") -> 10 - 10 = 0

console.log(2 - null); // null -> toNumber(null) -> 0 -> 2 - 0 = 2
console.log(2 - undefined); // undefined -> toNumber(undefined) -> NaN -> 2 - NaN = NaN 
console.log(2 - "0xa");