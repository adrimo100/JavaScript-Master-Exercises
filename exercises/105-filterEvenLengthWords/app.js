function filterEvenLengthWords(words) {
    // your code here

    var output = [];

    words.forEach(element => {
        if(element.length % 2 == 0)
            output.push(element);
    });

    return output;

}

var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']