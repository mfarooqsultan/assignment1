"use strict";
//22.Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
Object.defineProperty(exports, "__esModule", { value: true });
let array_names = ["ali", "zia", "saad", "musa"];
console.log(array_names[4]); // error is undefined 
let new_array = array_names.indexOf("farooq");
console.log(new_array); // returns -1 bcoz farooq not present in array
console.log(array_names[0], array_names[1], array_names[2], array_names[3]); // corrected
