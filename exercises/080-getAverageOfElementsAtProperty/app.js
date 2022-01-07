// Write your function here

var getAverageOfElementsAtProperty = (obj, key) =>{

if(obj[key] == undefined || obj[key].length == 0 || !Array.isArray(obj[key]))
    return 0;

else{
    
    var i = 0, sum = 0;

    for(i = 0; i < obj[key].length; i++)
        sum += obj[key][i];

    return sum/i;
    }
}
