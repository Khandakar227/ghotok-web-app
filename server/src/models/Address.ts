class Address{
    private division: string = "Dhaka";
    private district: string = "Dhaka";
    private city: string = "Dhaka";

    constructor(division: string, district: string, city: string){
        this.setDivision(division);
        this.setDistrict(district);
        this.setCity(city);
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

    public getAddress(){
        return ({division: this.division, city: this.city, district: this.district});
    }
}

export default Address;