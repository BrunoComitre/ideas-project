// Normally using
var add = function (num1, num2) { return num1 + num2; };
var oneOrTheOther = function (properties) {
    if (properties.one) {
        return { one: properties.one };
    }
    else if (properties.theOther) {
        return { theOther: properties.theOther };
    }
};
console.log(oneOrTheOther({ one: "hi", theOther: "bye" }));
