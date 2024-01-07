"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Middleware = void 0;
class Middleware {
    static verifyUser(token) {
    }
    static checkPassword(email, password) {
    }
    static verifyUserRoute(req, res) {
        try {
        }
        catch (error) {
            res.status(403).json({ error: true, message: "Unauthorized Access" });
            console.log(error);
        }
    }
    static validateLogin(req, res, next) {
        try {
            const { email } = req.body;
            const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailRgx.test(email))
                next();
            else
                return res.status(401).json({ error: true, message: "Invalid email" });
        }
        catch (error) {
            res.status(403).json({ error: true, message: "Input invalid" });
            console.log(error);
        }
    }
}
exports.Middleware = Middleware;
