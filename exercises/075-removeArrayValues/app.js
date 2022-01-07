function removeArrayValues(obj) {
    // your code here

    var keys = Object.keys(obj);

    for(var i = 0; i < keys.length; i++)
        if(Array.isArray(obj[keys[i]]))
            obj[keys[i]] = undefined;
}