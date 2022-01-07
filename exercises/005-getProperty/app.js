function getProperty(obj, key) {
  // your code here
  console.log("La clave es:" + key); 
  
  if(obj[key] == null)
    return undefined;
  else
    return obj[key];
}