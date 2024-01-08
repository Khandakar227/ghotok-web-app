const divisions = require("./division.json");
const districts = require("./district.json");
const { writeFileSync } = require("fs");

const locations = [];

divisions.divisions.forEach(division => {
    let address = {
        division_id: division.id,
        name: division.name,
        districts: []
    }
    address.districts = districts.districts.filter(dist => (dist.division_id == division.id) ?  true : false)
    locations.push(address);
})

writeFileSync("address.json", JSON.stringify(locations));