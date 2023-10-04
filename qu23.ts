/*23.	Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')
• Look closely at your results, and make sure you understand why each line evaluates to True or False.
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/


let car = "toyota"
console.log("Is car == 'toyota' ? I predict True.")
console.log(car=="toyota");  

let car1 = "toyota"
console.log("Is car == 'toyota' ? I predict False.")
console.log(car1 !=="toyota"); 

let car2 = "toyota".toUpperCase()
console.log("Is car == 'toyota' ? I predict False.")
console.log(car2=="toyota");  

let car3 = "toyota".toUpperCase()
console.log("Is car == 'toyota' ? I predict True.")
console.log(car3=="TOYOTA");

let car4 = "toyota".toLowerCase()
console.log("Is car == 'toyota' ? I predict True.")
console.log(car4=="toyota");  

let car5 = "toyota".toLowerCase()
console.log("Is car == 'toyota' ? I predict False.")
console.log(car5=="TOYOTA");  

let car6 = "toyota"
console.log("Is car == 'toyota' ? I predict False.")
console.log(car6=="honda");  

let car7 = "toyota"
console.log("Is car == 'toyota' ? I predict True.")
console.log(car7 !=="honda");  