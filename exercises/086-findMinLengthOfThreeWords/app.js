// Write your function here

var findMinLengthOfThreeWords = (a , b, c) => {

    var aux = a.length < b.length ? a.length : b.length;

    return  aux < c.length ? aux : c.length;



}