function calculateBillTotal(preTaxAndTipAmount) {
    // your code here

    return Math.round((preTaxAndTipAmount * 1.245) * 100) / 100;

}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9