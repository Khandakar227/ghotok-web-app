"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const libs_1 = require("../../libs");
const mongoose_1 = require("mongoose");
const addressSchema_1 = __importDefault(require("./addressSchema"));
const userSchema = new mongoose_1.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    gender: { type: String, enum: libs_1.GENDER, required: true },
    description: { type: String },
    blood_group: { type: String, enum: libs_1.BLOOD_GROUP },
    height: { type: Number },
    marital_status: { type: String, enum: libs_1.MARITAL_STATUS },
    weight: { type: Number },
    complexion: { type: String },
    nationality: { type: String },
    date_of_birth: { type: Date },
    education: { type: String },
    profession: { type: String },
    present_address: { type: addressSchema_1.default },
    permanent_address: { type: addressSchema_1.default },
    created_at: { type: Date, default: Date.now },
});
const UserModel = (0, mongoose_1.model)("User", userSchema);
UserModel.collection.createIndex({
    username: "text",
    email: "text",
    contact: "text",
    description: "text",
    nationality: "text",
    education: "text",
    profession: "text",
    present_address: "text",
    permanent_address: "text",
});
exports.default = UserModel;
