import { Request, Response } from "express";
export default class SearchUser {
    public static async search(req: Request, res: Response) {
        try {
            const { gender, keyword, complexion } = req.query;
            console.log(gender, keyword, complexion)
            res.status(200).json({ error: false,  })
        } catch (error) {
            const err = error as Error;
            console.log(err.message);
            res
            .status(500)
            .json({
                error: true,
                message: `Unexpected error occured on the server. ${err.message}`,
            });
        }
    }
}