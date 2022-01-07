function findPairForSum(array, number){

    var output = [];
  
    for(var j = 0; j < array.length; j++)
        for(var i = 0; i < array.length; i++)
            if(j != i)
                if(array[j] + array[i] == number){
                    output.push(array[j])
                    output.push(array[i])
                    return output;
                }
    
    
}

var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]