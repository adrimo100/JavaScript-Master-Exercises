// Write your function here

var findMaxLengthOfThreeWords = (a , b, c) => {

    var aux = a.length > b.length ? a.length : b.length;

    return  aux > c.length ? aux : c.length;



}