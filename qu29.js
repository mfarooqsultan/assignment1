"use strict";
/*29.	Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
Object.defineProperty(exports, "__esModule", { value: true });
let favfruits = ["mango", "banana", "orange", "grapes"];
if (favfruits = ["banana"]) {
    console.log("it is my favourite");
}
;
if (favfruits = ["orange"]) {
    console.log("it is my favourite");
}
;
if (favfruits = ["mango"]) {
    console.log("it is my favourite");
}
;
if (favfruits.includes("mango")) {
    console.log("Its Yummy");
}
;
let favfruits1 = ["mango", "banana", "orange", "grapes"];
function favourite_fruits(fruits) {
    for (let abc = 0; abc < favfruits1.length; abc++) {
        console.log(`my favorite fruit is ${favfruits1[abc]}`);
    }
}
;
favourite_fruits(favfruits1);
// OR
let favourite_fruit = ["mango", "banana", "orange", "grapes"];
for (let abc = 0; abc < favourite_fruit.length; abc++) {
    if ("mango" === favourite_fruit[abc]) {
        console.log("I really like mango");
    }
}
;
