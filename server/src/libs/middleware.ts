import { Request, Response } from 'express';

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
}