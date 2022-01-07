function getLargestElement(arr) {
  // your code here

  var output = 0;

    arr.forEach(element => {
        
        if(output == 0)
            output = element;
        else if(output < element)
            output = element;

    });

    return output;
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;