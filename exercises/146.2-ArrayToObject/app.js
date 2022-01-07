function fromListToObject(array) {
  // your code here

  var obj = {};

  array.forEach(element => {

    obj[element[0]] = element[1];
    
  });

  return obj;
}

let output = fromListToObject([['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]])
console.log(output) // => { make: 'Ford', model: 'Mustang', year: 1964 }