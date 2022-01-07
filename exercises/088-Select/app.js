// Write your function here

var select = (arr, obj) => {

    var output = {
 
    }

    arr.forEach(element => {
        if(obj[element] != undefined)
            output[element] = obj[element];
    });

return output;

} 