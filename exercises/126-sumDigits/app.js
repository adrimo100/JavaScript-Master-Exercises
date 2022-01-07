function sumDigits(num) {
    // your code here
    var string = num.toString();
    var i = 0;

    var output = 0;

    if(string[0] == '-'){
        output += Number(string[1]) * (-1);
        i = 2;
    }

    while(i < string.length){
        output += Number(string[i]);
        i++;
    }


    return output;

}
var output = sumDigits(316);
console.log(output); // --> 4