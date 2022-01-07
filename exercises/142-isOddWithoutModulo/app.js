function isOddWithoutModulo(num) {
    // your code here

    if(num == 0)
        return false;
    else 
        return !Number.isInteger(num / 2);

}
var output = isOddWithoutModulo(17);
console.log(output); // --> true