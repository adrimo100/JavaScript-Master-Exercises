function findLongestPalindrome(sentence) {
  // split sentence into words
  // iterate words and collect the palindromes
  // sort the list of palindromes by word length
  // return the largest item in the sorted list

  return isPalindrome(sentence);
}

function reverseString(string) {

  var output = "";

  for(var i = string.length - 1; i >= 0; i--)
    output += string[i];

  return output;
}

function isPalindrome(word) {
  // hint: you can detect palindromes by comparing a string to its reverse


  var output = "";

  var aux1 = [], aux2 = [], palindromes = [];

  var strAux = "";

  var reversedWord = reverseString(word);

  
  //Divido en fragmetos word
  for(var i = 0; i < word.length; i++){
    strAux = "";
    
    for(var j = i; j < word.length; j++){

      strAux += word[j];
      aux1.push(strAux);
    }
  }



  //Divido en fragmentos el reverso de word
  for(var i = 0; i < reversedWord.length; i++){
    strAux = "";

    for(var j = i; j < reversedWord.length; j++){

      strAux += reversedWord[j];
      aux2.push(strAux);
    }
  }

  //Buscamos todos los palindromos
  for(var i = 0; i < aux1.length; i++){
    for(var j = 0; j < aux2.length; j++){
      if(aux1[i].toLowerCase() == aux2[j].toLowerCase())
        palindromes.push(aux1[i]);
    }
  }

  //Buscamos el palindromo más largo
  palindromes.forEach(element => {

    if(output == "")
      output = element;

    if(sortAscendingByLength(element, output) == 1 || sortAscendingByLength(element, output) == 0)
      output = element;
    
  });

  return output;
}

function sortAscendingByLength(a, b) {
  if (a.length > b.length) {
    return 1;
  } else if (a.length < b.length) {
    return -1;
  }
  return 0;
}