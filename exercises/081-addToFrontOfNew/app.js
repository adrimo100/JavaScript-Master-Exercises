
function addToFrontOfNew(arr, element) {
    // Write your function here
     
    var output = arr.slice(); //arr es un obje, y al pasar su dir. de memoria es como si se pasase por referencia.

    output.unshift(element);

    return output;
}

var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]