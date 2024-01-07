"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongoDb = void 0;
const mongoose_1 = require("mongoose");
class MongoDb {
    static init(url, dbName) {
        if (MongoDb.instance == null) {
            (0, mongoose_1.connect)(url, {
                dbName
            }).then(db => MongoDb.instance = db)
                .catch((error) => {
                console.log("connection failed! ", error);
            });
        }
    }
    get db() {
        return MongoDb.instance;
    }
}
exports.MongoDb = MongoDb;
