import { Request, Response } from "express";
import UserModel from "../models/mongodb/userModel";

class UserInfoRouteHandler {
  public async update(req: Request, res: Response) {
    const {
      username,
      contact,
      gender,
      description,
      blood_group,
      height,
      marital_status,
      weight,
      complexion,
      nationality,
      date_of_birth,
      education,
      profession,
      present_address,
      permanent_address,
    } = req.body;
    const user = await UserModel.findOne({ email: res.locals.user.email });
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User does not exist",
      });
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { email: res.locals.user.email },
      {
        $set: {
          username: username || user.username,
          contact: contact || user.contact,
          gender: gender || user.gender,
          description: description || user.description,
          blood_group: blood_group || user.blood_group,
          height: height || user.height,
          marital_status: marital_status || user.marital_status,
          weight: weight || user.weight,
          complexion: complexion || user.complexion,
          nationality: nationality || user.nationality,
          date_of_birth: date_of_birth || user.date_of_birth,
          education: education || user.education,
          profession: profession || user.profession,
          present_address: present_address || user.present_address,
          permanent_address: permanent_address || user.permanent_address,
        },
      },
      { new: true }
    );
    if(updatedUser) updatedUser.password = "";
    res.status(200).json({ error: false, data: updatedUser });
  }

  public async delete(req: Request, res: Response) {
    const user = await UserModel.findOne({ email: res.locals.user.email });
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User does not exist",
      });
    }
    await UserModel.deleteOne({ email: user.email });
    res.status(200).json({ error: false, message: "Deleted successfully" });
  }
// Admin usage only
  public updatebyAdmin = async (req: Request, res: Response) => {
    const {
      username,
      contact,
      gender,
      description,
      blood_group,
      height,
      marital_status,
      weight,
      complexion,
      nationality,
      date_of_birth,
      education,
      profession,
      present_address,
      permanent_address,
    } = req.body;
    const user = await UserModel.findOne({ email: req.params.email });
    if (!user) {
      return res.status(404).json({
        error: true,
        message: "User does not exist",
      });
    }

    const updatedUser = await UserModel.findOneAndUpdate(
      { email: req.params.email },
      {
        $set: {
          username: username || user.username,
          contact: contact || user.contact,
          gender: gender || user.gender,
          description: description || user.description,
          blood_group: blood_group || user.blood_group,
          height: height || user.height,
          marital_status: marital_status || user.marital_status,
          weight: weight || user.weight,
          complexion: complexion || user.complexion,
          nationality: nationality || user.nationality,
          date_of_birth: date_of_birth || user.date_of_birth,
          education: education || user.education,
          profession: profession || user.profession,
          present_address: present_address || user.present_address,
          permanent_address: permanent_address || user.permanent_address,
        },
      },
      { new: true }
    );
    if(updatedUser) updatedUser.password = "";
    res.status(200).json({ error: false, data: updatedUser });
  }
}

export default UserInfoRouteHandler;
