let sentence = "Java programming is fun and challenging";

// 1. Count total number of words
let words:string[] = sentence.split(" ");
let wordCount = words.length;
console.log("Total number of words:", wordCount);

// 2 using for loop Print the sentence words in reverse order.

let reverse="";
for (let i=words.length-1;i>=0;i--){
    reverse+=words[i] +" ";
}
console.log("Printing words in reverse order !!!:",  reverse)

// 2. Print the sentence words in reverse order
let reversedSentence = words.reverse().join(" ");
console.log("Sentence in reverse order:", reversedSentence);

// 3. Convert first character of each word to uppercase
let capitalizedSentence = sentence
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("Sentence with first letter capitalized:", capitalizedSentence);
