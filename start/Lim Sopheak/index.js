let studentName = "Lim sopheak";
console.log(studentName);
const age = 18;
console.log(age);
var isStudent = true;

let subject = [,'English','Life skill','Enviroment'];

let schoolName = "SOb";

let isMorningClass = true ;
 let friends = [
    'Vann toeng',
    'Lin',
    'Kim hay',
    'Try thay',
    'sopheak',
    ' my friends all in my class'
    
 ];
 console.log(friends)

 var teacher = {
    id: "0001",
    Fullname :'Em Siemhong',
    age : 34,
    numberOfExperience: 10,
 }

 const favoriteSubject = 'English';

 
 function getTotalPrice(nbOfBanana,nbOfOrange){
   
    let banana = 0.5;
    let orange = 2;
    var totalPrice = (nbOfBanana*banana)+(nbOfOrange*orange);
    console.log(totalPrice);
    return totalPrice;
    
 }
getTotalPrice(2,2);
getTotalPrice(1,3);


// This part i don't understand how to do?.
//  function sumNumbers (numbers){
//     let numbers = [a,b,c,d,e];
//     let totalNumber = ;
//     console.log(totalNumber)
//     return totalNumber;
//  }
sumNumbers(1,2,3)


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
    

    console.log('Location:',weatherData.location.name, ",",weatherData.location.region, ",",weatherData.location.country);
    console.log('Temperature (C):',weatherData.current.temp_c);
    console.log('Humidity:', weatherData.current.humidity,"%");
    console.log('Condition:',weatherData.current.condition.text);
    console.log('UV index:',weatherData.current.uv);

    