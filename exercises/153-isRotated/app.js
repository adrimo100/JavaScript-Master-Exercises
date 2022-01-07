function isRotated(str1, str2) {
    // your code here

    if(str1.length !== str2.length){
        return false
     };
     if( (str1.length || str2.length) === 0){
         return true
     };
     for(let i = 0; i < str1.length; i++){
        const reversed = str1.slice(i).concat(str1.slice(0, i));
        if(reversed === str2){
           return true
        };
     }
     return false;
}

console.log(isRotated('hello world', 'orldhello w')) // => true
console.log(isRotated('hello world', 'omrel wp')) // => false