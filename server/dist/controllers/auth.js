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
const user_1 = __importDefault(require("../models/user"));
const libs_1 = require("../libs");
class AuthRouteHandler {
    constructor() {
    }
    static login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const { token, userInfo } = yield user_1.default.login(email, password);
                res
                    .status(200)
                    .cookie("access_token", token, { maxAge: libs_1.LOGIN_DURATION, httpOnly: true })
                    .json({ error: false, data: userInfo });
            }
            catch (error) {
                console.log(error);
                res.json({ error: true, message: "Unexpected error occured." + error.message });
            }
        });
    }
    static signUp(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { username, password, email, contact_no, gender } = req.body;
                const user = new user_1.default({
                    username,
                    email,
                    password,
                    gender,
                    contact_no,
                });
                yield user.signUp();
                res.status(200).json({ error: false, message: "Account has been created. Try to login." });
            }
            catch (error) {
                console.log(error);
                res.json({ error: true, message: "Unexpected error occured. " + error.message });
            }
        });
    }
}
exports.default = AuthRouteHandler;
