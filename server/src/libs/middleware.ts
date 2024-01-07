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
            const {email} = req.body;
            const emailRgx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if(emailRgx.test(email)) next();
            else return res.status(401).json({ error: true, message: "Invalid email" });
        } catch (error) {
            res.status(403).json({ error: true, message: "Input invalid" });
            console.log(error);
        }
    }
}