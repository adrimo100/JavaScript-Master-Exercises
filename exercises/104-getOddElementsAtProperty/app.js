var obj = {
  key: [1, 2, 3, 4, 5]
};

function getOddElementsAtProperty(obj, key) {
    // your code here

    var output = [];

    if(Array.isArray(obj[key]))
      obj[key].forEach(element => {
        
        if(element % 2 != 0)
          output.push(element);

      });

    return output;
}

var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]