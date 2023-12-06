import {Request, Response} from 'express';

class AuthRouteHandler {
    constructor() {
        
    }
    public static login(req:Request, res: Response) {
        try {
            
        } catch (error) {
            console.log(error);
            res.json({error: true, message: "Unexpected error occured."})
        }
    }
    public static signUp(req:Request, res: Response) {
        try {
            const {  username, password, email, contact_no, gender } = req.body;
            
        } catch (error) {
            console.log(error);
            res.json({error: true, message: "Unexpected error occured."})
        }
    }
}

export default AuthRouteHandler;