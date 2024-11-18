function sortArrayZeroOne(arr){

    var x = arr.length;

    var i=0;
    var j=x-1;

    while(i<=j){
        if(arr[i]==1){
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;

            j--;
        }else{
            i++;
        }
    }

    console.log(arr)
}

var a = [0,0,1,0,1,1,0,1];
sortArrayZeroOne(a)
