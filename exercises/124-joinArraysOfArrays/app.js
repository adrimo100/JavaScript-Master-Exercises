function joinArrayOfArrays(arr) {
  // your code here
  var output = [];

  var i = 0;

  arr.forEach(element => {
    
    for(var j = 0; j < element.length; j++){
      output[i] = element[j];
      i++;
    }
    
  });

  return output;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output); // --> [1, 4, true, false, 'x', 'y']