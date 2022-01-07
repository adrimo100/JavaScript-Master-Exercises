
var obj = {
  key: [1000, 11, 50, 17]
};

function getEvenElementsAtProperty(obj, key) {
    // your code here

    
    var output = [];

    if(Array.isArray(obj[key]))
      obj[key].forEach(element => {
        
        if(element % 2 == 0)
          output.push(element);

      });

    return output;

}
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]