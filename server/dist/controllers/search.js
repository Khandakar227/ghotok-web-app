"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const userModel_1 = __importDefault(require("../models/mongodb/userModel"));
class SearchUser {
    static search(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { gender, keyword, complexion, minHeight, maxHeight, minWeight, maxWeight, district, division } = req.query;
                let filter = {};
                if (keyword === null || keyword === void 0 ? void 0 : keyword.trim())
                    filter = { $text: { $search: keyword.trim() } };
                if (gender)
                    filter = Object.assign(Object.assign({}, filter), { gender });
                if (complexion)
                    filter = Object.assign(Object.assign({}, filter), { complexion });
                if (minHeight)
                    filter = Object.assign(Object.assign({}, filter), { height: { $gt: minHeight } });
                if (maxHeight)
                    filter = Object.assign(Object.assign({}, filter), { height: Object.assign(Object.assign({}, filter.height), { $lt: maxHeight }) });
                if (minWeight)
                    filter = Object.assign(Object.assign({}, filter), { weight: { $gt: minWeight } });
                if (maxWeight)
                    filter = Object.assign(Object.assign({}, filter), { weight: Object.assign(Object.assign({}, filter.height), { $lt: maxWeight }) });
                if (district)
                    filter = Object.assign(Object.assign({}, filter), { "present_address.district": district });
                if (division)
                    filter = Object.assign(Object.assign({}, filter), { "present_address.division": division });
                console.log(filter);
                const data = yield userModel_1.default.find(filter);
                res.status(200).json({ error: false, data });
            }
            catch (error) {
                const err = error;
                console.log(err.message);
                res
                    .status(500)
                    .json({
                    error: true,
                    message: `Unexpected error occured on the server. ${err.message}`,
                });
            }
        });
    }
}
exports.default = SearchUser;
