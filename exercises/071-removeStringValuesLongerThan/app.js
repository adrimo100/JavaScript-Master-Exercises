function removeStringValuesLongerThan(num, obj) {
    // your code here
    var keys = Object.keys(obj);

    for(var i = 0; i < keys.length; i++)
        if(obj[keys[i]].length > num)
            obj[keys[i]] = undefined;
}
