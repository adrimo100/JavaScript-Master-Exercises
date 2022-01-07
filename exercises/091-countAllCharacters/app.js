// Write your function here

var countAllCharacters = (str) =>{

    var output = {};

    for(var i = 0; i < str.length; i++){
        if(output[str[i]] == undefined)
            output[str[i]] = 1;
        else
            output[str[i]] ++;
    }

    return output;
}