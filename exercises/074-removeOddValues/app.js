function removeOddValues(obj) {
    // your code here

    var keys = Object.keys(obj);

    for(var i = 0; i < keys.length; i++)
        if(obj[keys[i]] % 2 != 0)
            obj[keys[i]] = undefined;
}