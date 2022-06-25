"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var alphabet_1 = require("./alphabet");
function generateRandomString(numOfCharacters) {
    if (numOfCharacters < 1) {
        throw new Error("parameter must be integer bigger than 0");
    }
    var ret = "";
    for (var i = 0; i < numOfCharacters; i += 1) {
        ret += (0, alphabet_1.getRandom_One_UpperAlphabet)();
    }
    return ret;
}
