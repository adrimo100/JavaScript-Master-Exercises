function countCharacter(str, char) {
    // your code here

    let rept = 0;

    for(let i = 0; i < str.length; i++)
        if(str[i] == char)
            rept++;

    return rept;
}