"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const search_1 = __importDefault(require("../controllers/search"));
const searchRoute = (0, express_1.Router)();
searchRoute.get("/", search_1.default.search);
exports.default = searchRoute;
