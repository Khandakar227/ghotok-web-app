import {Request, Response} from 'express';
import User from '../models/user';
import { LOGIN_DURATION } from '../libs';

class AuthRouteHandler {
    constructor() {      
    }
    public static async login(req:Request, res: Response) {
        try {
            const { email, password } = req.body;
            const {token, userInfo} = await User.login(email, password);
            
            res
                .status(200)
                .cookie("access_token", token, {maxAge: LOGIN_DURATION, httpOnly: true})
                .json({ error: false, data:userInfo });
        } catch (error) {
            console.log(error);
            res.json({error: true, message: "Unexpected error occured." + (error as Error).message})
        }
    }
    public static async signUp(req:Request, res: Response) {
        try {
            const {  username, password, email, contact_no, gender } = req.body;
            const user = new User({
                username,
                email,
                password,
                gender,
                contact_no,
            });
            await user.signUp();
            res.status(200).json({error: false, message: "Account has been created. Try to login."})

        } catch (error) {
            console.log(error);
            res.json({error: true, message: "Unexpected error occured. " + (error as Error).message})
        }
    }
}

export default AuthRouteHandler;