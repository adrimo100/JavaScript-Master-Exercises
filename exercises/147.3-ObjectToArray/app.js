function convertObjectToList(obj) {
  // your code here

  var arr = [];
  var keys = Object.keys(obj);

  keys.forEach(element => {

    
    arr.push([element, obj[element]]);

  });

  return arr;
}