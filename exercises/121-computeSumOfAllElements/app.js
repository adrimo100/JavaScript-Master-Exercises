function computeSumOfAllElements(arr) {
  // your code here
  var output = 0;

  arr.forEach(element => {
    output += element;
  });

  return output;
}

var output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6