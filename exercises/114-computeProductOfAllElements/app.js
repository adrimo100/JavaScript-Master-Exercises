function computeProductOfAllElements(arr) {
    // your code here

    var output = 0;

    arr.forEach(element => {

        if(output == 0)
            output = element;
        
        else
            output *= element;
        
    });

    return output;
}

var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60