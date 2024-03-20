//Variables & Data Types

//string
let name = "Vannda";
let username =  "vannda";
let productName  =IPhone;
let companyName =Sala;
//Number 
let age = 24;
let Number =99.9;
let price = 15;

//boolean
let isStudent = Yes;
let isLoggedIn = Yes;
let isActive  = Yes;
let hasSubscription= No;
//array
let grades = [1,2,3];
let emails =["sopheak.men@pse.ngo", "siemhong.em@pse.ngo"];
let fruitsList = ["banana"," apple", "pineapple", "mango"]
//object
let object = {
    id:1,
    username:"vannda",
    isActivated:"true",
  };
  //if else
 if ("studentScore" >= 90){
    console.log("Excellent");
 }else if("studentScore" >= 70){
    console.log(" Good job");
 }else ("studentScore" < 70){
    console.log("Need improvement!");
 }
 let studentScore = 70;
 
 //Function
 function calculateRectangleArea(){
    const area = "length" * "width" ;
    return area;
 }
 function getTotalPrice(nbOfBanana ,nbOfMango){
    let BananaPrice = 1;
    let MangoPrice = 2;
    const TotalBanana ="BananaPrice" * "nbOfBanana";
    const TotalMango ="MangoPrice" * "nbOfMango";
    const TotalPrice = "nbOfBanana" + "nbOfMango";
    return TotalPrice + "$";
 }


 //Objects
 const student1 = {
    fullname: " Kosal Vong",
    age: 18 ,
    gender: "male",
    province: "Takeo province",
  };
  const student2 = {
    fullname: " Savanna Tep",
    age: 14 ,
    gender: "female",
    province: "Battambong province",
  };
  //array
  let students =[
      {
        fullname: " Kosal Vong",
        age: 18 ,
        gender: "male",
        province: "Takeo province",
      },
      {
        fullname: " Savanna Tep",
        age: 14 ,
        gender: "female",
        province: "Battambong province",
      },
  ]
  let text = "";
  for (let i = 0; i < students.length; i++) {
    text += students[i] ;
  }
  document.getElementById("demo").innerHTML= text;
 


