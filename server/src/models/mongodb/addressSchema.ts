import { Schema } from "mongoose";

const AddressSchema =  new Schema({
    division: { type: String, required: true, index: 'text' },
    district: { type: String, required: true, index: 'text' },
    city: { type: String, required: true, index: 'text' },
});

export default AddressSchema;