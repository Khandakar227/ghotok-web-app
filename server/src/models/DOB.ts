class DOB{
    private day: number = 1;
    private month: number = 1;
    private year: number = 2001;

    constructor(d: number, m: number, y: number ){
        this.setDay(d);
        this.setMonth(m);
        this.setYear(y);
    }

    public setDay(d: number): void{
        if (d < 1 || d > 31) {
            throw new Error("Invalid day");
        }
        this.day = d;
    }
    public setMonth(m: number): void{
        if (m < 1 || m > 12) {
            throw new Error("Invalid month");
        }
        
        this.month = m;
    }
    public setYear(y: number): void{
        if (y < 0) {
            throw new Error("Invalid year");
        }
        
        this.year = y;
    }
    public getDay(d: number): number{
        return this.day;
    }
    public getMonth(m: number): number{
        return this.month;
    }
    public getYear(y: number): number{
        return this.year;
    }

    public BirthDate(): string{
        return `${this.day}/${this.month}/${this.year}`;
    }
}


class Address{
    private division: string = "Dhaka";
    private district: string = "Dhaka";
    private city: string = "Dhaka";

    constructor(d: string, di: string, c: string){
        this.setDivision(d);
        this.setDistrict(di);
        this.setCity(c);
    }

    public setDivision(d: string): void{
        if (d == "") {
            throw new Error("Invalid division");
        }
        this.division = d;
    }

    public setDistrict(di: string): void{
        if (di == "") {
            throw new Error("Invalid district");
        }
        this.district = di;
    }

    public setCity(c: string): void{
        if (c == "") {
            throw new Error("Invalid city");
        }
        this.city = c;
    }

    public getDivision(): string{
        return this.division;
    }

    public getDistrict(): string{
        return this.district;
    }

    public getCity(): string{
        return this.city;
    }

    public showAddress(): string{
        return `City: ${this.city}, District: ${this.district}, Division: ${this.division}`;
    }

}