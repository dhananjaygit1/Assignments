/*  Assignment 1 – Data Types
1. Temperature of a city in degrees Celsius: 25.5
2. Whether a customer has placed an order: true or false
3. Person's phone number: "123-456-7890"
4. Amount of money in a customer's bank account: 1000.50
5. Person's email address: "john.doe@example.com"
6. Coordinates of a location (latitude, longitude): 37.7749, -122.4194
7. Person's marital status: true or false
8. Person's occupation: "Software Engineer"
9. Person's favourite colour: "Blue"
10.Current year: 2023
11.Number of followers on a social media platform: 1,000,000
12.Rating of a movie: 7.5
13.Person's blood type: 'A'
14.Title of a book: "To Kill a Mockingbird"
15.Number of employees in a company: 500
16.Time of an event: 2:30 PM
17.Name of a country: "United States"
18.Person's eye color: "Brown"
19.Person's birthplace: "New York City"
20. Distance between two cities: 200.5*/


    // declaring variables
let cityTempratue:number = 25.5;
let orderStatus:boolean = true;
let contactNumber:String = "123-456-7890";
let accountBalance:number =1000.00;
let emailAddress:String = "dhananjay.ghorpade02@gmail.com";
let location_latitude:(String | number)[] = ["Longitude", 37.7749, "latitude", -122.4194];

let marital_Status:boolean = true;
let occupation:String = "Software Engineer";
const favourite_Colour:String = "Blue";
const current_Year:number = 2026;
let followers:number = 100000;
let movie_Rating:number = 7.5
const blood_type:String = 'A';
const bookTitle:String = "To Kill a Mockingbird";
let numberOfEmp:number = 500;
let eventTime:number = 2.30;
const country:String = "USA"; 
const eyeColor:String = "Brown"
const birthPlace:String ="New York City";
let distanceBetweenCities:number =200.5;

    // printing vaiables
console.log("Temperature of a city in degrees Celsius: " +cityTempratue);
console.log("Whether a customer has placed an order: " +orderStatus);
console.log("Person's phone number: " +contactNumber);
console.log("Amount of money in a customer's bank account: " +accountBalance);
console.log("Person's email address: " +emailAddress);
console.log("Coordinates of a location (latitude): " +location_latitude[1]);
console.log("Coordinates of a location (longitude): " +location_latitude[3]);
console.log("Person's marital status: " +marital_Status);
console.log("Person's occupation: " +occupation);
console.log("Person's favourite colour: " +favourite_Colour);
console.log("Current year: " +current_Year);
console.log("Number of followers on a social media platform: " +followers);
console.log("Rating of a movie: " +movie_Rating);
console.log("Person's blood type: " +blood_type);
console.log("Title of a book: " +bookTitle);
console.log("Number of employees in a company: " +numberOfEmp);
console.log("Time of an event: " +eventTime);
console.log("Name of a country: " +country);
console.log("Person's eye color: " +eyeColor);
console.log("Person's birthplace: " +birthPlace);
console.log("Distance between two cities: " +distanceBetweenCities);
