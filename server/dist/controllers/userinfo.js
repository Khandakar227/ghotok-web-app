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
const userModel_1 = __importDefault(require("../models/mongodb/userModel"));
class UserInfoRouteHandler {
    constructor() {
        // Admin usage only
        this.updatebyAdmin = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { username, contact, gender, description, blood_group, height, marital_status, weight, complexion, nationality, date_of_birth, education, profession, present_address, permanent_address, } = req.body;
            const user = yield userModel_1.default.findOne({ email: req.params.email });
            if (!user) {
                return res.status(404).json({
                    error: true,
                    message: "User does not exist",
                });
            }
            const updatedUser = yield userModel_1.default.findOneAndUpdate({ email: req.params.email }, {
                $set: {
                    username: username || user.username,
                    contact: contact || user.contact,
                    gender: gender || user.gender,
                    description: description || user.description,
                    blood_group: blood_group || user.blood_group,
                    height: height || user.height,
                    marital_status: marital_status || user.marital_status,
                    weight: weight || user.weight,
                    complexion: complexion || user.complexion,
                    nationality: nationality || user.nationality,
                    date_of_birth: date_of_birth || user.date_of_birth,
                    education: education || user.education,
                    profession: profession || user.profession,
                    present_address: present_address || user.present_address,
                    permanent_address: permanent_address || user.permanent_address,
                },
            }, { new: true });
            if (updatedUser)
                updatedUser.password = "";
            res.status(200).json({ error: false, data: updatedUser });
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { username, contact, gender, description, blood_group, height, marital_status, weight, complexion, nationality, date_of_birth, education, profession, present_address, permanent_address, } = req.body;
            const user = yield userModel_1.default.findOne({ email: res.locals.user.email });
            if (!user) {
                return res.status(404).json({
                    error: true,
                    message: "User does not exist",
                });
            }
            const updatedUser = yield userModel_1.default.findOneAndUpdate({ email: res.locals.user.email }, {
                $set: {
                    username: username || user.username,
                    contact: contact || user.contact,
                    gender: gender || user.gender,
                    description: description || user.description,
                    blood_group: blood_group || user.blood_group,
                    height: height || user.height,
                    marital_status: marital_status || user.marital_status,
                    weight: weight || user.weight,
                    complexion: complexion || user.complexion,
                    nationality: nationality || user.nationality,
                    date_of_birth: date_of_birth || user.date_of_birth,
                    education: education || user.education,
                    profession: profession || user.profession,
                    present_address: present_address || user.present_address,
                    permanent_address: permanent_address || user.permanent_address,
                },
            }, { new: true });
            if (updatedUser)
                updatedUser.password = "";
            res.status(200).json({ error: false, data: updatedUser });
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield userModel_1.default.findOne({ email: res.locals.user.email });
            if (!user) {
                return res.status(404).json({
                    error: true,
                    message: "User does not exist",
                });
            }
            yield userModel_1.default.deleteOne({ email: user.email });
            res.status(200).json({ error: false, message: "Deleted successfully" });
        });
    }
}
exports.default = UserInfoRouteHandler;
