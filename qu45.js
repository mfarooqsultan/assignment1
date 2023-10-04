"use strict";
//45.	Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function car_point(manufacturer, model, ...properties) {
    let car_feature = {
        manufacturer,
        model,
    };
    for (const [key, value] of properties) {
        car_feature[key] = value;
    }
    return car_feature;
}
;
let mycar = car_point("honda", 2020, ["features", "airconditioned"], ["color", "red"]);
console.log(mycar);
