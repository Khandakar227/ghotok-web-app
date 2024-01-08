"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
class Middleware {
    static verifyUserRoute(req, res, next) {
        try {
            const token = (0, jsonwebtoken_1.verify)(req.cookies['access_token'], process.env.JWT_SECRET_KEY);
            if (token && typeof token !== 'string') {
                res.locals.user = token;
                next();
            }
            else
                return res.status(403).json({ message: "Failed to authenticate" });
        }
        catch (error) {
            console.log(error.message);
            return res.status(403).json({ message: "Failed to authenticate" });
        }
    }
    static validateLogin(req, res, next) {
        try {
            const { email, password } = req.body;
            const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRgx.test(email))
                return res.status(401).json({ error: true, message: "Invalid email" });
            if (password.length <= 5)
                return res
                    .status(401)
                    .json({ error: true, message: "Password length must be 6 or more." });
            next();
        }
        catch (error) {
            res
                .status(403)
                .json({
                error: true,
                message: "Unexpected error: " + error.message,
            });
            console.log(error);
        }
    }
    static validateSignup(req, res, next) {
        try {
            const { username, password, email, contact_no, gender } = req.body;
            const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const contactNoRgx = /^(\+8801\d{9}|\b01\d{9})$/;
            if (!username || username.trim().length <= 2)
                return res
                    .status(401)
                    .json({
                    error: true,
                    message: "Username must be of length 3 or more",
                });
            if (!emailRgx.test(email))
                return res.status(401).json({ error: true, message: "Invalid email" });
            if (password.length <= 5)
                return res
                    .status(401)
                    .json({ error: true, message: "Password length must be 6 or more." });
            if (!contactNoRgx.test(contact_no))
                return res
                    .status(401)
                    .json({
                    error: true,
                    message: "Invalid contact number. Must start with +8801 or 01",
                });
            if (!gender || !["male", "female"].includes(gender))
                return res
                    .status(401)
                    .json({
                    error: true,
                    message: "Invalid gender. It is either male or female",
                });
            next();
        }
        catch (error) {
            res
                .status(403)
                .json({
                error: true,
                message: "Unexpected error: " + error.message,
            });
            console.log(error);
        }
    }
}
exports.Middleware = Middleware;
