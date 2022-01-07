var obj = {
  key: [2, 1, 5]
};

function getSquaredElementsAtProperty(obj, key) {
    // your code here

    var output = [];

    if(!Array.isArray(obj[key]))
      return output;

    obj[key].forEach(element => {

      output.push(Math.pow(element, 2));
      
    });

    return output;

}

var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]