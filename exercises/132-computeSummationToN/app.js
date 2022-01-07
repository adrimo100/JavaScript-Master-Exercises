function computeSummationToN(n) {
    // your code 

    var output = 0;
    
    for(var i = 0; i <= n; i++)
        output += i;

    return output;

}

var output = computeSummationToN(6);
console.log(output); // --> 21