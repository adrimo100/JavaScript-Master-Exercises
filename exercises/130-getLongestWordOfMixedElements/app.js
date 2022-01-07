function getLongestWordOfMixedElements(arr) {
    // your code here

    var output = "";

    arr.forEach(element => {
        
        if(isNaN(element)){
            if(output == "")
                output = element
            else if(output.length < element.length)
                output = element;
        }

    });

    return output;
}

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'