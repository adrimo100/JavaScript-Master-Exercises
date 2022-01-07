function isEvenWithoutModulo(num) {
    // your code here

    if(num == 0)
        return true;
    else 
        return Number.isInteger(num / 2);
}
var output = isEvenWithoutModulo(8);
console.log(output); // --> true