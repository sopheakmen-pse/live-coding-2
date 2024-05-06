// Variable & Data Type
let studentName = "leakhena";
let age = 19;
let isStudent = true;
let subjects = ["WMAD"];
let schoolName = "SOB";
let classroomNumber = 13;
let isMorningClass = true;
let friends = ["vorleak","monika","mey"];
let teacher = {id:"0001",fullname:"Em Siemhong",age:34,numberOfExperience:10};
let favoriteSubject = "English";

console.log(studentName);
console.log(age);
console.log(isStudent);
console.log(subjects);
console.log(schoolName);
console.log(classroomNumber);
console.log(isMorningClass);
console.log(friends);
console.log(teacher);
console.log(favoriteSubject);

// Functions

function getTotalPrice(nbOfBanana,nbOfOrnage){
    let pbanana = 0.5;
    let porange = 2;
    let value = (nbOfBanana*pbanana)+(nbOfOrnage*porange);
    return value;
}
console.log(getTotalPrice(2,2));
console.log(getTotalPrice(1,3));

let a = 1;
let b = 2;
let c = 3;
function sumNumbers(numbers) {
   return(a+b+c);
  }
  console.log(sumNumbers(1,2,3));




// Acessing Array item




// Length of numbers: 5
// First element of numbers: 0
// Last element of numbers: 5
// Element at index 2 of numbers: 3

const weatherData = {
    location: {
    name: "Boston",
    region: "Lincolnshire",
    country: "United Kingdom",
    lat: 53.1,
    lon: -0.13,
    tz_id: "Europe/London",
    localtime_epoch: 1714962767,
localtime: "2024-05-06 3:32",
},
current: {
last_updated_epoch: 1714962600,
last_updated: "2024-05-06 03:30",
temp_c: 9.0,
temp_f: 48.2,
is_day: 0,
condition: {
text: "Clear",
icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
code: 1000,
},
wind_mph: 3.8,
wind_kph: 6.1,
wind_degree: 90,
wind_dir: "E",
pressure_mb: 1006.0,
pressure_in: 29.71,
precip_mm: 0.0,
precip_in: 0.0,
humidity: 93,
cloud: 0,
feelslike_c: 7.9,
feelslike_f: 46.3,
vis_km: 10.0,
vis_miles: 6.0,
uv: 1.0,
gust_mph: 9.6,
gust_kph: 15.4,
},
};
console.log("Location:",weatherData.location.name,",",weatherData.location.region,",",weatherData.location.country,);
console.log("Temperature (c):",weatherData.current.temp_c);
console.log("Humidity:",weatherData.current.humidity,"%");
console.log("Feel like temperater:",weatherData.current.feelslike_c);
console.log("Condition:",weatherData.current.condition.text);
console.log("UV Index:",weatherData.current.uv);
