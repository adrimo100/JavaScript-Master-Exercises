function computeFactorialOfN(n) {
    // your code here
    var factorial = 1;

    for(var i = n; i > 0; i--)
        factorial *= i;

    return factorial;
}

var output = computeFactorialOfN(3); console.log(output); // --> 6

var output = computeFactorialOfN(4); console.log(output); // --> 24