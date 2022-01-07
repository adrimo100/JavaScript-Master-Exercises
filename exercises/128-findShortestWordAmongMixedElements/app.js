function findShortestWordAmongMixedElements(arr) {
    // your code here

    var output = "";

    arr.forEach(element => {
        
        if(isNaN(element)){
            if(output == "")
                output = element
            else if(output.length > element.length)
                output = element;
        }

    });

    return output;
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'