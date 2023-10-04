//21.	Theythink of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let cementBag = {
name : "bestWay",
prices: "Rs.1200",
certification: "ISO certified"
};
let bags : Array<typeof cementBag>= [];

bags.push(cementBag);

bags.push({name:"DG",prices:"Rs.1250",certification:"ISO certified"});
bags.push({name:"Maple Leaf",prices:"Rs.1300",certification:" Its ISO certified"});
console.log(bags);
