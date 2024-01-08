"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userinfo_1 = __importDefault(require("../controllers/userinfo"));
const middleware_1 = require("../libs/middleware");
const userRoutes = (0, express_1.Router)();
const handler = new userinfo_1.default();
userRoutes.put("/", middleware_1.Middleware.verifyUserRoute, handler.update);
userRoutes.delete("/", middleware_1.Middleware.verifyUserRoute, handler.delete);
// Admin use
// userRoutes.put("/:email", handler.updatebyAdmin);
exports.default = userRoutes;
