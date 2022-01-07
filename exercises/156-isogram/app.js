function isIsogram(text) {
  // add each char to a set
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
  // note: a set drops dup values
  // thus, to see if all the chars were unique,
  // check length of text and the size of the set 

  if(text.length == 0)
    return true;
  
  for(var i = 0; i < text.length; i++)
    for(var j = 0; j < text.length; j++)
      if(i != j)
        if(text[i] == text[j])
          return false;
  return true;
}

console.log(isIsogram("Camile")) // => true
console.log(isIsogram("Camille")) // => false