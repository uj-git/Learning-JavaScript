function fetchNextElemenet(array){
    let idx = 0;
    function next(){
        if(idx==array.length){
            return {value: undefined, done: true};
        }
        const nextElement = array[idx];
        idx++;
        return {value: nextElement, done: false};
    }

    return {next};
}

const automaticFetcher = fetchNextElemenet([1,2,3,4,5,6,7,8,9]);

console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());
console.log(automaticFetcher.next());