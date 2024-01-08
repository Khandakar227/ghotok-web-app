"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(division, district, city) {
        this.division = "Dhaka";
        this.district = "Dhaka";
        this.city = "Dhaka";
        this.setDivision(division);
        this.setDistrict(district);
        this.setCity(city);
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
