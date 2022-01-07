var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    // your code here

    var keys = Object.keys(obj);

    for(var i = 0; i < keys.length; i++)
        if(obj[keys[i]] < num)
            obj[keys[i]] = undefined;
}
