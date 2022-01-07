function getAverageOfElementsAtProperty(obj, key) {
  // your code here

  if(!Array.isArray(obj[key]))
    return 0;

   else if(obj[key].length == 0)
    return 0;

    var suma = 0;

    obj[key].forEach(element => {
      suma += element;
    });

    return suma / obj[key].length;

}


