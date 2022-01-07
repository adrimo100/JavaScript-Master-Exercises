function getLengthOfLongestElement(arr) {
    // your code here

    var longest = 0;

    arr.forEach(element => {
        if(longest == 0)
            longest = element.length;

        else if(longest < element.length)
            longest = element.length;
        
    });

    return longest;
}

var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5