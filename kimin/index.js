//Variable & Datatype
let name = "Vannda";
const age = 24 ;
let isstundent = Yes; 
let grades = [1,2,3,];
var username = "Vannda";
let score = 99.9;
let isLoggedIn = Yes;
const email = ["sopheak.men@pse.ngo","siemhong.em@pse.ngo"];
let userInfo = {
    id : 1,
    username :"Vannda",
    isActivated :true,
};
let productName = "Iphone";
const price = 15 ;
var isActive = yes;
let companyName = "Sala";
const hasSubscription = No;
let fruitsList = [ "banana","apple","pineapple","mango"];

//If Else
 let studentScore = 70;
  if (studentScore >= 90) {
    console.log("Excellent!");
  } else if (studentScore >=70) {
    console.log("Good job!");
  }else{
    console.log("Need to improve!")

  };


 
 // Grade evaluation - write your code below


function getTotalPrice(nbOfBanana, nbOfMango) {
const priceBanana=1;
const priceMango=2; 
const totalBanana = nbOfBanana * priceBanana;
const totalMango = nbOfMango * priceMango;
const totalPrice = totalBanana + totalMango;
return  totalPrice + '$';
}
console.log(getTotalPrice(2, 2)); 
console.log(getTotalPrice(1, 3));



function calculateRectangleArea(length, width) {
   const area = length * width;
return area;
}
console.log(calculateRectangleArea(10, 20));
console.log(calculateRectangleArea(5, 10));


//Objects

let student1={
fullname:"Kosal Vong",
age : 18,
gender: male,
province:Takeo,

};
let student2={
fullname:"Savanna Tep",
age:14 ,
gender:female,
province:Battambong,
};

//Array

const students=["student1","student2"];


// Loop & DOM

    let text = "";
    for (let i = 0; i < students.length; i++) {
      text += students[i] ;
    }
    document.getElementById("demo").innerHTML= text;
  












 




