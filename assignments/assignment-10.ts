

function isPalindrome(s: string): boolean {
    // Convert to lowercase and remove non-alphanumeric characters
    let pallindrome = s.toLowerCase().replace(/[^a-z0-9]/g, "");

    let reversed = "";

    // Reverse using for loop
    for (let i = pallindrome.length - 1; i >= 0; i--) {
        reversed += pallindrome[i];
    }

    return pallindrome === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama1"))
console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))