import { BLOOD_GROUP, GENDER, MARITAL_STATUS } from "../../libs";

import { Schema, model } from "mongoose";
import AddressSchema from "./addressSchema";

const userSchema =  new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    contact: { type: String, required: true },
    gender: { type: String,  enum : GENDER, required: true },
    description: { type: String },
    blood_group: { type: String, enum: BLOOD_GROUP },
    height: { type: Number },
    marital_status: { type: String, enum: MARITAL_STATUS },
    weight: { type: Number },
    complexion: { type: String },
    nationality: { type: String },
    date_of_birth: { type: Date },
    education: { type: String },
    profession: { type: String },
    present_address: { type:AddressSchema },
    permanent_address: { type:AddressSchema },
    created_at: { type: Date, default: Date.now },
});

const UserModel = model("User", userSchema);
export default UserModel;