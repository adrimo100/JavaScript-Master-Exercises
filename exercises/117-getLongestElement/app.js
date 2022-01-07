function getLongestElement(arr) {
    // your code here

    var output = "";

    arr.forEach(element => {
        
        if(output.length == 0)
            output = element;
        else if(output.length < element.length)
            output = element;

    });

    return output;
}
var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'