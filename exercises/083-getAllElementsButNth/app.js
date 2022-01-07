function getAllElementsButNth(array, n) {
    // Write your function here

    let output = [];

    for(let i = 0; i < array.length; i++)
        if(i != n)
            output.push(array[i]);

    return output;

}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']