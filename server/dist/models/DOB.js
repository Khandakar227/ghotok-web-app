"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DOB {
    constructor(d, m, y) {
        this.day = 1;
        this.month = 1;
        this.year = 2001;
        this.daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (d > this.daysInMonth[m - 1]) {
            throw new Error("Invalid day");
        }
        this.setDay(d);
        this.setMonth(m);
        this.setYear(y);
    }
    setDay(d) {
        if (d < 1 || d > 31) {
            throw new Error("Invalid day");
        }
        this.day = d;
    }
    setMonth(m) {
        if (m < 1 || m > 12) {
            throw new Error("Invalid month");
        }
        this.month = m;
    }
    setYear(y) {
        if (y < 0) {
            throw new Error("Invalid year");
        }
        this.year = y;
    }
    getDay(d) {
        return this.day;
    }
    getMonth(m) {
        return this.month;
    }
    getYear(y) {
        return this.year;
    }
    BirthDate() {
        return `${this.day}/${this.month}/${this.year}`;
    }
}
exports.default = DOB;
