
//string//
let name = "Vannda";
let username = "vannda";
let productName = "IPhone X";
let companyName = "Sala";
//number//
let age = 24;
let score = 99.9;
let price = 15;
//boolean//
let isStudent = true;
let isLoggedIn = true;
let isActive = true;
let hasSubscription = false;
//array//
let grades = [1,2,3];
let emails = ["sopheak.men@pse.ngo", "siemhong.em@pse.ngo"];
let fruitsList = ["banana","apple","pineapple","mango"];

//object//
let userInfo = {
    id: 1,
    username: "vannda",
    isActivated: true,

};
let student1 = {
    fullname:"Kosal Vong",
    age: 18,
    gender:"male",
    from:"Takeo Province"
}

let student2 = {
    fullname:"Savanna Tep",
    age: 14,
    gender:"female",
    from:"Battambong province"
}


//if&else//
let studentScore = 70;
if (studentScore >= 90) {
    console.log("Excellent!");
} else if (studentScore >= 70) {
    console.log("Good job!");
} else {
    console.log("Need improvement!");
}

//functions//
function calculateRectangleArea(length, width) {
    let area = length * width;
    return area;
}

console.log(calculateRectangleArea(10, 20)); 
console.log(calculateRectangleArea(5, 10)); 

            
function getTotalPrice(nbo0fBanana,nbofMango) {
    return nbo0fBanana * nbofMango;
  }
  
  let result = getTotalPrice(1,2);
  document.getElementById("demo").innerHTML = result;





