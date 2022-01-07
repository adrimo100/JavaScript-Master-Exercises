function getAllLetters(str) {
    // your code here
    var arr = []; //Declarar array vacío.

    for(var i = 0; i < str.length; i++)
        arr.push(str[i]);

    console.log(arr);
    

    return arr;
}