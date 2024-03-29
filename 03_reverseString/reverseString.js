const reverseString = function(string) {
    let Arr = string.split("");
    string = "";
    for(let i = Arr.length - 1; i >= 0; i--){
        string += Arr[i];
    }
    return string;
};

// Do not edit below this line
module.exports = reverseString;
