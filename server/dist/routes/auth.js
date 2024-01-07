"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = __importDefault(require("../controllers/auth"));
const middleware_1 = require("../libs/middleware");
const authRoutes = (0, express_1.Router)();
authRoutes.post("/login", middleware_1.Middleware.validateLogin, auth_1.default.login);
authRoutes.post("/signup", middleware_1.Middleware.validateSignup, auth_1.default.signUp);
exports.default = authRoutes;
