// Write your function here

var isEitherEven = (num1, num2) => {

    let output = num1 % 2 == 0 || num2 % 2 == 0 ? true : false;

    return output;
}