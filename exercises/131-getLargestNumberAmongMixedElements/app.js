function getLargestNumberAmongMixedElements(arr) {
    // your code here

    var output = 0;

    arr.forEach(element => {
        
        if(typeof element != "string"){
            if(output == 0)
                output = element
            else if(output < element)
                output = element;
        }

    });

    return output;
}

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5