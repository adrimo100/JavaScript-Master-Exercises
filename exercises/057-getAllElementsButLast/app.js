function getAllElementsButLast(array) {
    // your code here

    let arr = array.splice(0, array.length - 1);

    return  arr;
}  