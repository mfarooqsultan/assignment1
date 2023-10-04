"use strict";
/*35.	Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
Object.defineProperty(exports, "__esModule", { value: true });
let animals = ["snakes", "crocodiles", "turtle"];
for (let an = 0; an < animals.length; an++) {
    console.log(animals[an]);
}
;
//modify 
let reptanimal = ["snakes", "crocodiles", "turtle"];
for (let an = 0; an < reptanimal.length; an++) {
    {
        console.log(`${reptanimal[0]}is scary`);
    }
    {
        console.log(`${reptanimal[1]}is long`);
    }
    {
        console.log(`${reptanimal[2]}is slow`);
    }
}
;
console.log(`All of these animalse i.e, ${animals} etc are called reptile animals.They are cold blooded,have scaly skin and are creeping animals.`);
