const fs = require("fs");
const addresses = require("./address.json")

const bg = ["A+","B+","A-","B-","AB+","O+","O-"];
const height = [6,5,5.5,5.8,5.3, 5.1, 6.2, 5.9, 5.11]
const weight = [80, 81, 70, 60, 50, 47, 85, 90, 56]
const names = [
"Shahrin Farooque"
,"Nazat Jahan Fatima" 
,"Nufsat Hossain" 
,"Nowshin Sumaiya"
,"Rihila Mahjabin"
,"Mehreen Ahmed" 
,"Fariya Hossain Chowdhury"
,"Miraj mahmud Mahee"
,"Ahsanul Amin Anik"
,"Hasib Altaf"
,"Ahmed Rafid"
,"Sadman Rahman Sahil"
,"Md.Ifti Akkas"
,"Ahmed Shafin Ruhan" 
,"Tahsin BR"
,"Md Abdul Muqtadir"
,"Wasif Uddin" 
,"Ankon Ahamed"
,"Tasnim"
,"Sadman Ahmed Siam"
,"Ahmed Sadman Labib"
,"Rumman Adib"
,"Rafiul Arefeen Islam"
,"Md. Rifat Sarwar"
,"Masuq Al Islam Nafi"
,"Nazrul Islam Rimon"
,"Saadman Sakib" 
,"Araf"
,"Oshayer Siddique"
]
const complexion = [
'#ffe5c4',
'#ffc37d',
'#fbc191',
'#ffda96',
'#ca6740',
'#e79e7b',
'#a35f30',
'#ffe4c4',
'#db9d58',
'#c48a47',
'#a66a2e',
'#6b2e02',
'#2a1001',
'#311400',
]

function generateRandomDate() {
    const startYear = 2000;
    const endYear = 2003;
    const randomYear = Math.floor(Math.random() * (endYear - startYear + 1)) + startYear;
    const randomMonth = Math.floor(Math.random() * 12) + 1; // Months are 1-12
    const daysInMonth = new Date(randomYear, randomMonth, 0).getDate();
    const randomDay = Math.floor(Math.random() * daysInMonth) + 1; 
    const formattedDate = `${randomMonth}/${randomDay}/${randomYear}`;
    return formattedDate;
  }

function generateRandomPhoneNumber() {
    const prefix = "01";
    const remainingDigits = 11 - prefix.length;
    let randomNumber = Math.floor(Math.random() * Math.pow(10, remainingDigits));
    randomNumber = randomNumber.toString().padStart(remainingDigits, '0');
    const phoneNumber = prefix + randomNumber;
    return phoneNumber;
}

function generateRandomObjects(names=[], bloodGroups, height, weight) {
    let result = [];
  
    for (let i = 0; i < names.length; i++) {
      const randomBloodGroupIndex = Math.floor(Math.random() * bloodGroups.length);
      const randomHeightIndex = Math.floor(Math.random() * height.length);
      const randomWeightIndex = Math.floor(Math.random() * weight.length);
      const randomComplexionIndex = Math.floor(Math.random() * complexion.length);
      const randomDivIndex = Math.floor(Math.random() * addresses.length);
      const randomDistIndex = Math.floor(Math.random() * addresses[randomDivIndex].districts.length);

      const randomObject = {
        email: names[i].replace(/ /g, "").toLowerCase()+ "@gmail.com",
        username: names[i],
        password: names[i][0] + names[i][names[i].length - 1] + names[i].length +  Math.floor(Math.random() * 1000),
        contact_no: generateRandomPhoneNumber(),
        gender: i< 6 ? "female" : "male",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sagittis volutpat sapien, eu sollicitudin sapien blandit eget. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elementum libero a faucibus rhoncus. Nullam in metus dui. Curabitur ullamcorper commodo venenatis. Fusce risus nunc, vestibulum sed ligula a, interdum iaculis purus. Vestibulum pretium purus urna, at ultrices lacus viverra ac. Praesent tincidunt laoreet maximus. Praesent pellentesque hendrerit sapien ut consectetur. Cras congue lacinia nibh ac bibendum. Proin vehicula nisi sed tellus ullamcorper, luctus semper arcu semper. Duis consectetur, nulla id condimentum porta, dui justo hendrerit sem, dignissim tristique risus libero vel libero.\nFusce id sodales mi. Quisque placerat nulla at nisi accumsan, at tincidunt nunc finibus. Proin felis velit, tincidunt id leo at, porttitor semper augue. Maecenas vulputate magna id ante semper, non condimentum libero molestie. Vestibulum pulvinar finibus diam id facilisis. Donec non feugiat lorem. Nullam sit amet pretium tellus.",
        blood_group: bg[randomBloodGroupIndex],
        height: height[randomHeightIndex],
        marital_status: "single",
        weight: weight[randomWeightIndex],
        complexion: complexion[randomComplexionIndex],
        nationality: "Bangladeshi",
        date_of_birth: generateRandomDate(),
        present_address: {
            division: addresses[randomDivIndex].name,
            district: addresses[randomDivIndex].districts[randomDistIndex].name,
            city: "",
        }
    };
    result.push(randomObject);
    }
    return result;
  }

  const filename = "./data/users.json"
  const resultArray = generateRandomObjects(names, bg, height, weight);
  const jsonString = JSON.stringify(resultArray, null, 2);
  fs.writeFileSync(filename, jsonString);
  console.log("Saved in", filename);
  