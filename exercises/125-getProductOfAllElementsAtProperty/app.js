var obj = {
  key: [1, 2, 3, 4]
};

function getProductOfAllElementsAtProperty(obj, key) {
    // your code here
    var output = 0;

    if(Array.isArray(obj[key]))
      obj[key].forEach(element => {

        if(output == 0)
          output = 1;

       output *= element;
      });
    
    return output;
}
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24