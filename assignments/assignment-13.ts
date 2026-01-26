/*
1. If I will pass int rows = 5 then it should print triangle with 5 Rows
*
**
***
****

*/

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";
    for (let space = rows - i; space > 0; space--) {
        pattern += " ";
    }
    for (let star = 1; star <= i; star++) {
        pattern += "*";
    }
    console.log(pattern);
}