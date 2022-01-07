var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    // your code here

    var keys = Object.keys(obj);

    for(var i = 0; i < keys.length; i++)
        if(!isNaN(obj[keys[i]]))
            obj[keys[i]] = undefined;
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }