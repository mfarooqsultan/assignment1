"use strict";
/*24.	More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array*/
Object.defineProperty(exports, "__esModule", { value: true });
let fruit = "mango";
console.log(fruit == "mango"); // true
console.log(fruit !== "mango"); // false
console.log(fruit == "Mango"); // false
let a = 12;
let b = 5;
let c = 18;
console.log(a != 12); //False
console.log(a < 12); // False
console.log(a <= 12); // True
console.log(a < c); // True
console.log(a < b || b < c); //True (one condition fulfilled)
console.log(a < b && b < c); // False (needs both true)
let colours = ["green", "blue", "orange"];
console.log(colours.includes("blue")); // True
console.log(colours.includes("red")); // false
