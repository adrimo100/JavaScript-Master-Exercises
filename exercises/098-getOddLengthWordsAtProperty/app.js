// Write your function here

var getOddLengthWordsAtProperty = (obj, key) =>{

    var output = [];

    obj[key].forEach(element => {
        if(element.length % 2 != 0)
            output.push(element);
    });

    return output;

}