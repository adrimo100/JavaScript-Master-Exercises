var obj = {
  key: ['a', 'long', 'game']
};
function getEvenLengthWordsAtProperty(obj, key) {
    // your code here

    var output = [];

   
    if(!Array.isArray(obj[key]))
      return output;
    
    obj[key].forEach(element => {

      if(element.length % 2 == 0)
        output.push(element);
      
    });

    return output;
}

var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']