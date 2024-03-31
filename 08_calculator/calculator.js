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

const multiply = function(array) {
  total = 1;
  for (let i = 0; i < array.length; i++){
    total = total * array[i];
  }
  return total
};

const power = function(x, y) {
  return x ** y
};

const factorial = function(x) {
  total = 1;
  if(x==0){
    return 1
  }
  else{
    for(let i = x; i > 0; i--){
      total = total * i
    }
    return total
  }
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
