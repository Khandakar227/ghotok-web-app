import { Schema } from "mongoose";

const AddressSchema =  new Schema({
    division: { type: String, required: true },
    district: { type: String, required: true },
    city: { type: String, required: true },
});

export default AddressSchema;