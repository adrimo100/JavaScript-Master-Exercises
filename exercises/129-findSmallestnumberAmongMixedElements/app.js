function findSmallestNumberAmongMixedElements(arr) {
  // your code here

  var output = 0;

    arr.forEach(element => {
        
        if(!isNaN(element)){
            if(output == 0)
                output = element
            else if(output > element)
                output = element;
        }

    });

    return output;
}

var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4