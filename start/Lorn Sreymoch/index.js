let studentName = "Lorn SreyMoch";
let age = 16;
let isStudent = "ture";
let subject = ["English", "Computer", "Environment", "Life Skill"];
let schoolName = "WMAD";
let classroomNumber = "F13 and F14";
let isMorningClass = "ture";
let friends = ["Mey", "Hay", "Chhunlin", "SreyMey"];
let teacher = {
    id: 1,
    fullname: "Em Siemhong",
    age: 34,
    numberOfExperience: "10 years",
};
let favoviteSubject = ["English", "Computer"];


// function
nbOfBanana = 0.5;
nbOfOrange = 2;
function getTotalPrice(nbOfBanana, nbOfOrange) {
    nbOfBanana * 2;
    nbOfOrange * 2;
};
function getTotalPrice(nbOfBanana, nbOfOrange) {
    nbOfBanana * 1;
    nbOfOrange * 3;
};

function sum(...numbers) {
    return numbers.reduce((a, b) => a + b, 0);
};
console.log(sum(1, 2, 3));
console.log(sum(5, 10, 15, 20));
console.log(sum(2, 4, 6, 8, 10));
console.log(sum(3));
console.log(sum());


const weatherData = {
    location: {
        name: "Boston",
        region: "Lincolnshire",
        country: "United Kingdom",
        lat: 53.1,
        lon: -0.13,
        tz_id: "Europe/London",
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

console.log("Location: ",weatherData.location.name+","+weatherData.location.region+","+weatherData.location.country)
console.log("Temperature (C): ",weatherData.current.temp_c);
console.log("Humidity: ", weatherData.current.humidity,"%");
console.log("Feels Like Temperature(C):", weatherData.current.feelslike_c);
console.log("Condition: ", weatherData.current.text);
console.log("UV Index: ", weatherData.current.uv);



const numbers = [1, 2, 3, 4, 5];

const lengthOfNumbers = numbers.length;
console.log("Length of numbers:", lengthOfNumbers);

const a = numbers[0];
console.log("First element of numbers:", a);

const b = numbers.length;
console.log("Last element of numbers:", b);

const c = numbers[2];
console.log("Element at index 2 of numbers:", c);
