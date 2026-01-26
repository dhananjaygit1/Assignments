/*
String sentence = "Java programming is fun and challenging";
Assignment: Write a program to search for all occurrences of a “Java” word in the paragraph and print their
indexes.
1. Find total number of occurrences
2. Print count and Indexes of the word
*/
let paragraph = "Java is a popular programming language. Java is used for web development, mobile applications, and more.";

let allWords = paragraph.split(" ");
let count = 0;

for (let i = 0; i < allWords.length; i++) {
    if (allWords[i].toLowerCase() === "java") {
        count++;
        console.log("Java found at word index:", i);
    }
}

console.log("Total number of words:", allWords.length);
console.log("Number of 'Java' words:", count);
