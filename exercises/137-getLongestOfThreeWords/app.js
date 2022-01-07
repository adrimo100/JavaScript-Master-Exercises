function getLongestOfThreeWords(word1, word2, word3) {
    // your code here

    var output = word1;

    if(output.length < word2.length)
        output = word2;
    
    if(output.length < word3.length)
        output = word3;
    
    return output;
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'