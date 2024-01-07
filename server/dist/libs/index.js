"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_DURATION = exports.MARITAL_STATUS = exports.BLOOD_GROUP = exports.GENDER = void 0;
var GENDER;
(function (GENDER) {
    GENDER["MALE"] = "male";
    GENDER["FEMALE"] = "female";
})(GENDER || (exports.GENDER = GENDER = {}));
var BLOOD_GROUP;
(function (BLOOD_GROUP) {
    BLOOD_GROUP["A+"] = "A+";
    BLOOD_GROUP["B+"] = "B+";
    BLOOD_GROUP["A-"] = "A-";
    BLOOD_GROUP["B-"] = "B-";
    BLOOD_GROUP["AB+"] = "AB+";
    BLOOD_GROUP["O+"] = "O+";
    BLOOD_GROUP["O-"] = "O-";
})(BLOOD_GROUP || (exports.BLOOD_GROUP = BLOOD_GROUP = {}));
var MARITAL_STATUS;
(function (MARITAL_STATUS) {
    MARITAL_STATUS["MARRIED"] = "married";
    MARITAL_STATUS["UNMARRIED"] = "unmarried";
    MARITAL_STATUS["DIVORCED"] = "divorced";
})(MARITAL_STATUS || (exports.MARITAL_STATUS = MARITAL_STATUS = {}));
exports.LOGIN_DURATION = 3600000 * 4;
