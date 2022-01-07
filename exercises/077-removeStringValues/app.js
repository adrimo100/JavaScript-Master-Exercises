function removeStringValues(obj) {
    // your code here
    var keys = Object.keys(obj);

    for(var i = 0; i < keys.length; i++)
        if(isNaN(obj[keys[i]]))
            obj[keys[i]] = undefined;
}

var obj = {
    name: 'Sam',
    age: 20
  }

removeStringValues(obj);
console.log(obj); // { age: 20 }