/*16.	More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

let inivitedFriends = ["Person1","Person2","Person3","Person4"];
inivitedFriends.unshift("Person5");
inivitedFriends.splice(2,0,"Person6");
inivitedFriends.push("Person7");
console.log(inivitedFriends);
for (let biggerInvitaton of inivitedFriends)
{
    console.log(`Hi ${biggerInvitaton},We are extending our Party arrangemnets,You are als invited for dinner party`) 
};
