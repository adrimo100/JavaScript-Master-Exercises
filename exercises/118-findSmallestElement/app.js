function findSmallestElement(arr) {
    // your code here

    var output = 0;

    arr.forEach(element => {
        
        if(output == 0)
            output = element;
        else if(output > element)
            output = element;

    });

    return output;
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1