var obj = {
    key: [4, 1, 8]
};

function getSumOfAllElementsAtProperty(obj, key) {
    // your code here

    var output = 0;

    if(Array.isArray(obj[key]))
        obj[key].forEach(element => {
            output += element;
        });
    
    return output;
}
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13