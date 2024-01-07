"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(d, di, c) {
        this.division = "Dhaka";
        this.district = "Dhaka";
        this.city = "Dhaka";
        this.setDivision(d);
        this.setDistrict(di);
        this.setCity(c);
    }
    setDivision(d) {
        if (d == "") {
            throw new Error("Invalid division");
        }
        this.division = d;
    }
    setDistrict(di) {
        if (di == "") {
            throw new Error("Invalid district");
        }
        this.district = di;
    }
    setCity(c) {
        if (c == "") {
            throw new Error("Invalid city");
        }
        this.city = c;
    }
    getDivision() {
        return this.division;
    }
    getDistrict() {
        return this.district;
    }
    getCity() {
        return this.city;
    }
    getAddress() {
        return ({ division: this.division, city: this.city, district: this.district });
    }
}
exports.default = Address;
