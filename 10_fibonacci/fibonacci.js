const fibonacci = function(value) {
    if(value < 0) {
        return "OOPS";
    }
    let intValue;
    if(typeof value != Number && typeof value == String) {
        intValue = parseInt(value);
    } else {
        intValue = value;
    }

    let a = 1;
    let b = 1;

    for(let i=3; i <= value; i++) {
        let c = b + a;
        a = b;
        b = c;
    }

    return b;

};

// Do not edit below this line
module.exports = fibonacci;
