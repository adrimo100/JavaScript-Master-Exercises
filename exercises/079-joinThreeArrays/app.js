function joinThreeArrays(arr1, arr2, arr3) {
  // your code here

  var arr = [];

  arr = arr1.concat(arr2.concat(arr3));

  return arr;
}