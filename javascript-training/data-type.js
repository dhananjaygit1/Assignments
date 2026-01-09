//Data types has two catagories
//1 premitivie
//2 non-premitive
//1 premitive data types.

//1 number= is used to save number as well as decimals.

let num1 =10;
let num2 = 10.2345;
console.log(typeof num1);
console.log(typeof num2);
//2 string = is user to save sequnce of characters.
let name1='Dhananjay';
let name2 ="Dhanajay is playwrite automation engineer";
console.log(typeof name1);
console.log(typeof name2);
//3 boolean is user to save result of anything or any condition. true/false

let color = false;
let accountnum=true;
console.log(typeof color);
console.log(typeof accountnum);
//4 undefined
let jay;
console.log(typeof jay);
//null
let x=null;
console.log(typeof x);
// non premitive datatype
// 1 object
let empDetails={
    empid: 101,
    empName: "Dhananjay",
    visa: true,
    address:{
        city: "nuwYork",
        zip: 20002,
        state: "NY",
        country: "usa"       
    }

}

console.log(empDetails.empid);
console.log(empDetails.address.country);
console.log(empDetails);

// array
let fruits = ["apple", "banana", "orange", "mango"];
let fruitprice = ["apple", 120,"banana", 40,"orange", 50,"mango", 600];
let fruitpriceStatus = ["apple", 120,true,"banana", 40, false,"orange", 50, true,"mango", 600, true];
console.log(fruits[1]);
console.log(fruitprice[1]);
console.log(fruitpriceStatus[2]);
