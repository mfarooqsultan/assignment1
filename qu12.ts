//12.	Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let namesF= ["umar","ahmad","usman"];
console.log(`hello! ${namesF[0]},"How are you?"`);
console.log(`hello! ${namesF[1]},"How are you?"`);
console.log(`hello! ${namesF[2]},"How are you?"`);

// print everyone personalized message in a for loop (2nd method)
for(let message of namesF)
{
    console.log(`hello! ${message},"How are you?"`)
};