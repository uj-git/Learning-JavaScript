function CountFrequencyOfCharacters(str){

    var freqMap = {};

    for(var c of str){
        if(freqMap[c]){
            freqMap[c] += 1;
        }else{
            freqMap[c] = 1;
        }
    }

    console.log(freqMap);
}

let string1 = "Umang"
CountFrequencyOfCharacters(string1)
