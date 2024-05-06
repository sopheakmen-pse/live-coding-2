//Variables & Data Types//
let studentName = "sreyvorleak";
let age = 20;
let isStudent = true;
let subjects = ["WMAD","English","Environment","life skill"];
let schoolName = "PSE";
let classroomNumber = 14 ;
let isMorningClass = true ;
let friends = ["leakhena", "chhunlin", "srey phea"];
let teacher = {
        id: "0001",
        fullname: "Em Siemhong",
        age: 34,
        numberOfExperience: "10 years",
};
let favoriteSubject = "Environment";
console.log(studentName);
console.log(age);
console.log(isStudent);
console.log(subjects);
console.log(schoolName);
console.log(classroomNumber);
console.log(isMorningClass);
console.log(friends);
console.log(teacher);
//function//
let banana = 0.5 ;
let orange = 2; 
function getTotalPrice (nbOfBanana,nbOfOrange ) { 
     return nbOfBanana*nbOfOrange
};
console.log(banana*2+orange*2);
console.log(banana*1+orange*3);

/////
function sumNumbers (numbers){
  let
}

//
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
    }
}
console.log("Location: ",weatherData.location.name+","+weatherData.location.region+","+weatherData.location.country);
console.log("Temperature (C): ",weatherData.current.temp_c);
console.log("Humidity: ", weatherData.current.humidity,"%");
console.log("Feels Like Temperature(C):", weatherData.current.feelslike_c);
console.log("Condition: ", weatherData.current.text);
console.log("UV Index: ", weatherData.current.uv);
//////
const numbers = [1, 2, 3, 4, 5];
console.log("Length of numbers:", numbers.length);
console.log("First element of numbers:", numbers[0]);








