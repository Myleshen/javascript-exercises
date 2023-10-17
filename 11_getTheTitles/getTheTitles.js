const getTheTitles = function(objectArray) {
    let titleArray = [];
    for(let i in objectArray) {
        titleArray.push(objectArray[i].title);
    }
    return titleArray;   
};

// Do not edit below this line
module.exports = getTheTitles;
