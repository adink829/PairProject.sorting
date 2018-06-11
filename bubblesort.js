function bubbleSort(arr){
    for (let i = 0; i < arr.length; i++){
        let num1 = arr[i];

        for (let j = 1; j < arr.length; j++){
            let num2 = arr[j];
            if (num1 > num2){
                swap(num1, num2);
            } 
            // else we don't modify the location
        }
    }

};

function swap(num1, num2){
    //exchanging two elements locations in an array


}