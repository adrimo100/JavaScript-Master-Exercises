function squareElements(arr) {
  // your code here

  var output = [];

  arr.forEach(element => {

    output.push(Math.pow(element, 2))
    
  });

  return output;
}

var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]