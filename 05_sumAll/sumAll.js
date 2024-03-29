const sumAll = function(num1, num2) {
    let lower = 0;
    let bigger = 0;
    let sum = 0;

    if(!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR';
    }
    else if(num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    else{
        if(num2>num1){
            lower = num1;
            bigger = num2;
        }
        else if(num1>num2){
            lower = num2;
            bigger = num1;
        }
    
        for(i = lower; lower<=bigger; lower++){
            sum += lower;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
