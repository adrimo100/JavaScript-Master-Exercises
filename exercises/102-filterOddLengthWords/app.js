function filterOddLengthWords(words) {
    // your code here

    var output = [];

    words.forEach(element => {
        if(element.length % 2 != 0)
            output.push(element);
    });

    return output;
}

var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']