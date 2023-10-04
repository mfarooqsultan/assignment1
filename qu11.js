"use strict";
//11.	Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
Object.defineProperty(exports, "__esModule", { value: true });
let names = ["umar", "ahmad", "usman"];
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//  2nd way
function call(names) {
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
}
;
// call(names);
// Another way
for (let new_names of names) {
    console.log(new_names);
}
;
