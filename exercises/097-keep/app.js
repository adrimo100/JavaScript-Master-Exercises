// Write your function here

var keep = (arr, elem) => {

    var output = [];

    arr.forEach(element => {

        if(element == elem)
            output.push(element);
        
    });

    return output;

}