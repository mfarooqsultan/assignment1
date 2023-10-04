"use strict";
//42.	Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call make_great() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
let greatMagicians = ["Henry", "David", "Joseph"];
let make_great = (newMagician) => {
    newMagician.map((greatMagicians) => {
        console.log("The great " + greatMagicians);
    });
};
make_great(greatMagicians);
