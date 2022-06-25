"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandom_One_UpperAlphabet = exports.getRandom_One_LowerAlphabet = void 0;
var UpperAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
];
var LowerAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
];
function getRandom_One_UpperAlphabet() {
    var randomIdx = Math.floor(Math.random() * UpperAlphabet.length);
    return UpperAlphabet[randomIdx];
}
exports.getRandom_One_UpperAlphabet = getRandom_One_UpperAlphabet;
function getRandom_One_LowerAlphabet() {
    var randomIdx = Math.floor(Math.random() * LowerAlphabet.length);
    return LowerAlphabet[randomIdx];
}
exports.getRandom_One_LowerAlphabet = getRandom_One_LowerAlphabet;
