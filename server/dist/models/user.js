"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// User.ts
const crypto_1 = require("crypto");
const libs_1 = require("../libs");
const userModel_1 = __importDefault(require("./mongodb/userModel"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class User {
    // Constructor
    constructor(mandatoryInfo) {
        // Assigning values from MandatoryInfoProps
        this._username = mandatoryInfo.username;
        this._password = mandatoryInfo.password;
        this._email = mandatoryInfo.email;
        this._contact_no = mandatoryInfo.contact_no;
        this._gender = mandatoryInfo.gender;
    }
    get description() {
        return this._description;
    }
    set description(value) {
        this._description = value;
    }
    get blood_group() {
        return this._blood_group;
    }
    set blood_group(value) {
        this._blood_group = value;
    }
    get height() {
        return this._height;
    }
    set height(value) {
        this._height = value;
    }
    get marital_status() {
        return this._marital_status;
    }
    set marital_status(value) {
        this._marital_status = value;
    }
    get weight() {
        return this._weight;
    }
    set weight(value) {
        this._weight = value;
    }
    get complexion() {
        return this._complexion;
    }
    set complexion(value) {
        this._complexion = value;
    }
    get nationality() {
        return this._nationality;
    }
    set nationality(value) {
        this._nationality = value;
    }
    get date_of_birth() {
        return this._date_of_birth;
    }
    set date_of_birth(value) {
        this._date_of_birth = value;
    }
    // MandatoryInfoProps getters and setters
    get username() {
        return this._username;
    }
    set username(value) {
        this._username = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        this._email = value;
    }
    get contact_no() {
        return this._contact_no;
    }
    set contact_no(value) {
        this._contact_no = value;
    }
    get gender() {
        return this._gender;
    }
    set gender(value) {
        this._gender = value;
    }
    hashPassword(password) {
        const salt = (0, crypto_1.randomBytes)(16).toString("hex");
        const hashedPassword = (0, crypto_1.scryptSync)(password, salt, 64).toString("hex");
        return `${salt}:${hashedPassword}`;
    }
    static checkPasswordMatch(password, hashedPassword) {
        const [salt, key] = hashedPassword.split(":");
        const hashedBuffer = (0, crypto_1.scryptSync)(password, salt, 64);
        const keyBuffer = Buffer.from(key, "hex");
        const match = (0, crypto_1.timingSafeEqual)(hashedBuffer, keyBuffer);
        if (match)
            return true;
        return false;
    }
    signUp() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._username || !this._email || !this._password || !this._contact_no)
                throw Error("Missing a mandatory property");
            const user = yield userModel_1.default.findOne({ email: this._email });
            if (user)
                throw Error("An account already exist for this email");
            const password = this.hashPassword(this._password);
            const newUser = new userModel_1.default({
                username: this._username,
                email: this._email,
                contact: this._contact_no,
                gender: this._gender,
                password,
            });
            yield newUser.save();
        });
    }
    static login(email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!email || !password)
                throw Error("Invalid email or password.");
            const user = yield userModel_1.default.findOne({ email });
            if (!user)
                throw Error("Invalid email or password.");
            if (this.checkPasswordMatch(password, user.password)) {
                const userInfo = {
                    username: user.username,
                    email: user.email,
                    gender: user.gender,
                    contact: user.contact,
                };
                const token = jsonwebtoken_1.default.sign(userInfo, process.env.JWT_SECRET_KEY, {
                    expiresIn: libs_1.LOGIN_DURATION,
                });
                return { token, userInfo };
            }
            else
                throw Error("Invalid email or password.");
        });
    }
}
exports.User = User;
exports.default = User;
