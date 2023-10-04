"use strict";
//13.	Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
Object.defineProperty(exports, "__esModule", { value: true });
let favCar = ["Toyota", "Honda", "Suzuki"];
for (let series of favCar) {
    console.log(`I would like to own a ${series}car`);
}
;
// 2nd way
function fav_car(names) {
    for (let i = 0; i < favCar.length; i++) {
        console.log(`I would like to own a ${names[i]} car`);
    }
}
;
fav_car(favCar);
