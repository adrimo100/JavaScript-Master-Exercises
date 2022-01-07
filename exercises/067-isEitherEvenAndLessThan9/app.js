function isEitherEvenAndLessThan9(num1, num2) {
    // your code here

    var output = (num1 < 9 && num2 < 9) && (num1 % 2 == 0 || num2 % 2 == 0) ? true : false;

    return output;
}
