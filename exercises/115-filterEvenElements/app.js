
function filterEvenElements(arr) {
    // your code here

    var output = [];

    arr.forEach(element => {

      if(element % 2 == 0)
        output.push(element);
      
    });

    return output;
}

var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]
