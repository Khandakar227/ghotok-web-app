import { Request, Response } from "express";
import UserModel from "../models/mongodb/userModel";
export default class SearchUser {
    public static async search(req: Request, res: Response) {
        try {
            const { gender, keyword, complexion, minHeight, maxHeight, minWeight, maxWeight, district, division } = req.query;
            
            let filter:any = {}
            if ((keyword as string)?.trim()) filter = { $text: {$search: (keyword as string).trim()} };
            if(gender) filter = {...filter, gender};
            if (complexion) filter = {...filter, complexion};
            if(minHeight) filter = {...filter, height:{ $gt: minHeight }};
            if(maxHeight) filter = {...filter, height:{ ...filter.height, $lt: maxHeight }};
            if(minWeight) filter = {...filter, weight:{ $gt: minWeight }};
            if(maxWeight) filter = {...filter, weight:{ ...filter.height, $lt: maxWeight }};
            if(district) filter = {...filter, "present_address.district": district };
            if(division) filter = {...filter, "present_address.division": division };
            console.log(filter)
            const data = await UserModel.find(filter)

            res.status(200).json({ error: false, data })
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