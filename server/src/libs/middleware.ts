import { NextFunction, Request, Response } from 'express';

export class Middleware {
    public static verifyUser(token:string) {

    }
    public static checkPassword(email:string, password: string) {

    }
    public static verifyUserRoute(req:Request, res: Response) {
        try {
            
        } catch (error) {
            res.status(403).json({ error: true, message: "Unauthorized Access" });
            console.log(error);
        }
    }
    public static validateLogin(req:Request, res:Response, next:NextFunction) {
        try {
            const {email, password} = req.body;
            const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(!emailRgx.test(email)) return res.status(401).json({ error: true, message: "Invalid email" });
            if(password.length <= 5) return res.status(401).json({ error: true, message: "Password length must be 6 or more." });
            next();
        } catch (error) {
            res.status(403).json({ error: true, message: "Unexpected error: "+ (error as Error).message });
            console.log(error);
        }
    }
    public static validateSignup(req:Request, res:Response, next:NextFunction) {
        try {
            const { username, password, email, contact_no, gender} = req.body;
            const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const contactNoRgx = /^(\+8801\d{9}|\b01\d{9})$/;
            if(!username || username.trim().length <= 2) return res.status(401).json({ error: true, message: "Username must be of length 3 or more" });
            if(!emailRgx.test(email)) return res.status(401).json({ error: true, message: "Invalid email" });
            if(password.length <= 5) return res.status(401).json({ error: true, message: "Password length must be 6 or more." });
            if(!contactNoRgx.test(contact_no)) return res.status(401).json({ error: true, message: "Invalid contact number. Must start with +8801 or 01" });
            if(!gender || !['male', 'female'].includes(gender)) return res.status(401).json({ error: true, message: "Invalid gender. It is either male or female" });
            next();
        } catch (error) {
            res.status(403).json({ error: true, message: "Unexpected error: "+ (error as Error).message });
            console.log(error);            
        }
    }
}