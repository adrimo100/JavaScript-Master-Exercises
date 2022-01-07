var obj = {
  key: [2, 1, 5]
};
function getSmallestElementAtProperty(obj, key) {
    // your code here

    var output = [];

    if(Array.isArray(obj[key])){
      if(obj[key].length == 0)
          return output;

      obj[key].forEach(element => {

        if(output.length == 0)
          output[0] = element;
        else if(output > element)
          output[0] = element;
      });
    
      return output[0];
    }

    else
      return output;
      

}
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1