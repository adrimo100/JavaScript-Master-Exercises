var obj = {
  key: [1, 2, 3]
};
function getAllButLastElementOfProperty(obj, key) {
    // your code here

    var output = [];

    if(Array.isArray(obj[key]))
      output = obj[key].slice(0, obj[key].length - 1);

    return output;
}

var output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1,2]