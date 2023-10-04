"use strict";
//41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
Object.defineProperty(exports, "__esModule", { value: true });
let magicians = ["kohli", "jadeja", "kumar"];
function show_magicians(magicians) {
    for (let x = 0; x < magicians.length; x++) {
        console.log(magicians[x]);
    }
}
;
show_magicians(magicians);
// OR
let magicians1 = ["kohli", "jadeja", "kumar"];
let show_magicians1 = (newName) => {
    newName.map((magicians1) => {
        console.log(magicians1);
    });
};
show_magicians1(magicians1);
