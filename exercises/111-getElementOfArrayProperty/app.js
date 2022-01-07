var obj = {
 key: ['Jamil', 'Albrey']
};
function getElementOfArrayProperty(obj, key, index) {
    // your code here

    var output = undefined;

    if(Array.isArray(obj[key]))
        output = obj[key][index];

    return output;
}