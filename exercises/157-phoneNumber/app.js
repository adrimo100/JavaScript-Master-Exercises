function PhoneNumberFormatter(numbers) {
  this.numbers = numbers;

  return PhoneNumberFormatter.prototype.render();
}

PhoneNumberFormatter.prototype.render = function() {
  var string = '';
  // your code here

  string = this.getAreaCode() + " " + this.getExchangeCode() + "-" + this.getLineNumber();

  return string;
};

PhoneNumberFormatter.prototype.getAreaCode = function() {
  // your code here
  var string = "";

  string = this.parenthesize(numbers[0].toString() + numbers[1].toString() + numbers[2].toString());

  return string;

};

PhoneNumberFormatter.prototype.getExchangeCode = function() {
  // your code here
  var string = "";

  string = numbers[3].toString() + numbers[4].toString() + numbers[5].toString();

  return string;
};

PhoneNumberFormatter.prototype.getLineNumber = function() {
  // your code here
  var string = "";

  string = numbers[6].toString() + numbers[7].toString() + numbers[8].toString() + numbers[9].toString();

  
  return string;
};

PhoneNumberFormatter.prototype.parenthesize = function(string) {
  return '(' + string + ')';
};

PhoneNumberFormatter.prototype.slice = function(start, end) {
  return this.numbers.slice(start, end).join('');
};