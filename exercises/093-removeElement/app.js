// Write your function here

var removeElement = (arr, discarder) => {

output = [];

arr.forEach(element => {
    
    if(element != discarder)
        output.push(element);

});

return output;

}