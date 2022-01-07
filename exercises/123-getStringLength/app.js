function getStringLength(string) {
    // your code here
    var len = 0

    while(string[len] != undefined)
        len++;

    return len;
}

var output = getStringLength('hello');
console.log(output); // --> 5