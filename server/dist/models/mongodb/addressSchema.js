"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const AddressSchema = new mongoose_1.Schema({
    division: { type: String, required: true, index: 'text' },
    district: { type: String, required: true, index: 'text' },
    city: { type: String, required: true, index: 'text' },
});
exports.default = AddressSchema;
