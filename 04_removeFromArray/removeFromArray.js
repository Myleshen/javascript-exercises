const removeFromArray = function(inputArray, ...toDelete) {
    let outputArray = [];
    for(let i in inputArray) {
        if (toDelete.includes(inputArray[i])) {
            continue;
        }
        outputArray.push(inputArray[i]);
    }
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
