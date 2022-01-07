// Write your function here

var areValidCredentials = (name, password) =>{

  var output = name.length > 3 && password.length >= 8 ? true : false;

  return output;
}