"use strict";
/*
Either são:
agrupar os tipos que sao falhos do tipo que sao sucessos
*/
exports.__esModule = true;
// https://medium.com/@gcanti/functional-typescript-either-vs-validation-66c52f28ce1f
// https://khalilstemmler.com/articles/enterprise-typescript-nodejs/functional-error-handling/
// https://khalilstemmler.com/articles/enterprise-typescript-nodejs/handling-errors-result-class/
// https://maecapozzi.com/either-or-types/
// https://en.wikipedia.org/wiki/Category_theory
// https://paulgray.net/the-state-monad/
var Either_1 = require("fp-ts/lib/Either");
var function_1 = require("fp-ts/lib/function");
var minLength = function (s) {
    return s.length >= 6 ? (0, Either_1.right)(s) : (0, Either_1.left)("The string is too short");
};
var oneCapitals = function (s) {
    return s.match(/[A-Z]/) ? (0, Either_1.right)(s) : (0, Either_1.left)("The string must contain at least one capital letter");
};
var oneNumber = function (s) {
    return s.match(/\d/) ? (0, Either_1.right)(s) : (0, Either_1.left)("The string must contain at least one number");
};
var oneSpecialChar = function (s) {
    return s.match(/[^a-zA-Z0-9]/) ? (0, Either_1.right)(s) : (0, Either_1.left)("The string must contain at least one special character");
};
var validatePassword = function (s) {
    return (0, function_1.pipe)(minLength(s), (0, Either_1.chain)(oneCapitals), (0, Either_1.chain)(oneNumber), (0, Either_1.chain)(oneSpecialChar));
};
console.log(validatePassword('ab'));
console.log(validatePassword('abcdef'));
console.log(validatePassword('Abcdef'));
console.log(validatePassword('Abcd21ef'));
console.log(validatePassword('A#cd21ef'));
