function transformEmployeeData(array) {
  // your code here
   var arr = [];

   array.forEach(element => {

      var obj = {}

      element.forEach(element2 => {
        obj[element2[0]] = element2[1];
      });

      arr.push(obj);
     
   });

   return arr;

}