function findShortestElement(arr) {
    // your code here

    var output = "";

    arr.forEach(element => {
        
        if(output.length == 0)
            output = element;
        else if(output.length > element.length)
            output = element;

    });

    return output;
}
var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'