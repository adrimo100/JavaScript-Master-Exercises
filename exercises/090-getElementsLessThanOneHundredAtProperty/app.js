// Write your function here

var getElementsLessThan100AtProperty = (obj, key) =>{

    var output = [];

    obj[key].forEach(element => {
        if(element < 100)
            output.push(element);
    });
    
    return output;

}