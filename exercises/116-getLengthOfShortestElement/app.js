function getLengthOfShortestElement(arr) {
    // your code here

    var output = 0;

    arr.forEach(element => {
        
        if(output == 0)
            output = element.length;
        else if(output > element.length)
            output = element.length;

    });

    return output;
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3