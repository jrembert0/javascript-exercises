const palindromes = function (string) {
    //remove spaces and comma using Regex. \s is the regex for "whitespace", and g is the "global" flag, meaning match ALL \s
    let str = string.toLowerCase().replace(/[,.!\s]/g, '');
    let result = ''

    for(let i = str.length - 1; i >= 0; i--){
        result += str[i];
    }
    console.log(result)
    if(str==result){
        return true 
    }
    else{
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
