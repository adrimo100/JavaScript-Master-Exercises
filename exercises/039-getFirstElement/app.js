function getFirstElement(array) {
  // your code here

  if(array.length == 0)
    return undefined;
  
  return array[0];

}

var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output); // --> 1