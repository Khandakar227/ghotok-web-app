"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const driver_1 = require("./models/mongodb/driver");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = __importDefault(require("./routes/auth"));
const user_1 = __importDefault(require("./routes/user"));
const search_1 = __importDefault(require("./routes/search"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cors_1.default)({
    credentials: true,
    origin: '*'
}));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/v1/api/auth", auth_1.default);
app.use("/v1/api/user", user_1.default);
app.use("/v1/api/search", search_1.default);
// Initialize Database
driver_1.MongoDb.init(process.env.MONGODB_URL, "ghotok-dev");
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
