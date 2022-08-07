const repeatString = function(inputString, numOfTimes) {
    if(numOfTimes < 0) {
        return "ERROR";
    }
    let outputString = "";
    for (let i = 0; i < numOfTimes; i++) {
        outputString+=inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
