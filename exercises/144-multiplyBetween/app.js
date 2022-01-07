function multiplyBetween(num1, num2) {
    // your code here

    var output = 1;

    if(num2 <= num1)
        return 0;
    else{
        for(var i = num1; i < num2; i++)
            output *= i;
        return output;
    }


}

var output = multiplyBetween(2, 5);
console.log(output); // --> 24