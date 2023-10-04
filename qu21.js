"use strict";
//21.	Theythink of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
Object.defineProperty(exports, "__esModule", { value: true });
let cementBag = {
    name: "bestWay",
    prices: "Rs.1200",
    certification: "ISO certified"
};
let bags = [];
bags.push(cementBag);
bags.push({ name: "DG", prices: "Rs.1250", certification: "ISO certified" });
bags.push({ name: "Maple Leaf", prices: "Rs.1300", certification: " Its ISO certified" });
console.log(bags);
