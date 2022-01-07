// Write your function here

var computeAverageOfNumbers = (arr) =>{

    var suma = 0;

    arr.forEach(element => {
        suma += element;
    });

    return suma/arr.length;

}