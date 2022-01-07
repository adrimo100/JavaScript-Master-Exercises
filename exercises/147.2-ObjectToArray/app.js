function listAllValues(obj) {
  // your code here

  var arr = [];

  var keys = Object.keys(obj);

 
  keys.forEach(element => {

    arr.push(obj[element])
    
  });

  return arr;
}