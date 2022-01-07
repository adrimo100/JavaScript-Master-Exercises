function addToBackOfNew(arr, element) {
    // Write your function here
    let output = arr.slice();

    output.push(element);

    return output;

}

var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output); // --> [1, 2, 3]