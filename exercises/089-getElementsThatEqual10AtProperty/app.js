// Write your function here

var getElementsThatEqual10AtProperty = (obj, key) => {

var output = [];

obj[key].forEach(element => {
    if(element == 10)
        output.push(element);
});

return output;

}