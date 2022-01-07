function filterOddElements(arr) {
  // your code here

    var output = [];

    arr.forEach(element => {

      if(element % 2 != 0)
        output.push(element);
      
    });

    return output;
}

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]