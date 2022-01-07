function multiply(num1, num2) {
    // your code here

    aux1 = Math.abs(num1);
    aux2 = Math.abs(num2);

    let sum = aux1;

    for(var i = 1; i < aux2; i++)
        sum += aux1;

    if(num1 == 0 || num2 == 0)
        return 0;
    else if(num1 < 0 || num2 < 0)
        return -sum;
    else
        return sum;
}

var output = multiply(4, 7);
console.log(output); // --> 28