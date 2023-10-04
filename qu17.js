"use strict";
/*17.	Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/
Object.defineProperty(exports, "__esModule", { value: true });
let inivitedFriends = ["Person1", "Person2", "Person3", "Person4", "Person5", "Person6", "Person7"];
console.log("Sorry due to some managerial issues,I am limiting the party & just inviting 2 persons");
while (inivitedFriends.length > 2) {
    let uninvited = inivitedFriends.pop();
    console.log(`Sorry ${uninvited} due to some reason, I cant invite you for the time being.`);
}
console.log(`Dear,${inivitedFriends[0]} you are warmly invited for dinner`);
console.log(`Dear,${inivitedFriends[1]} you are warmly invited for dinner`);
inivitedFriends.pop();
inivitedFriends.pop();
console.log(inivitedFriends);
