function flipEveryNChars(input, n) {
    // your code here

    var output = "";

    for(var i = 0; i < input.length; i += n)
      for(var j = n - 1; j >= 0; j--)
        if(input[j + i] != undefined)
            output += input[j+i];

    return output;

}

var input = 'a short example';
var output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma