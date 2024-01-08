"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGIN_DURATION = exports.COMPLEXION = exports.MARITAL_STATUS = exports.BLOOD_GROUP = exports.GENDER = void 0;
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
exports.COMPLEXION = {
    Ivory: '#ffe5c4',
    Beige: '#ffc37d',
    Limestone: '#fbc191',
    Sand: '#ffda96',
    Umber: '#ca6740',
    Sienna: '#e79e7b',
    Almond: '#a35f30',
    Bisque: '#ffe4c4',
    Teak: '#db9d58',
    Brown: '#c48a47',
    DarkBrown: '#a66a2e',
    Espresso: '#6b2e02',
    Chocolate: '#2a1001',
    Black: '#311400',
};
exports.LOGIN_DURATION = 3600000 * 4;
