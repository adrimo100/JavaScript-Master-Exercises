function getElementsAfter(array, n) {
  // your code here

   
  var arr = array.splice(n + 1, array.length - n - 1);

  return arr;

}