function flipPairs(input){
    // your code here

    var output = "";

    for(var i = 0; i < input.length; i += 2)
      if(input[i+1] != undefined)
        output += input[i+1] + input[i];
        else
         output += input[i];

    return output;

}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var output = flipPairs(input);
console.log(output); // --> hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!
