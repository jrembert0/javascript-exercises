const add = function(x, y) {
	return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(array) {
	let s = 0;
  for (let i = 0; i < array.length; i++){
    s += array[i];
  }
  return s;
};

const multiply = function(x, y) {
  return x * y
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
