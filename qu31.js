"use strict";
/*31.	No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
Object.defineProperty(exports, "__esModule", { value: true });
let userName = ["farooq", "hamza", "ali", "admin", "hassan"];
userName.splice(0, 5);
console.log(userName);
if (userName.length === 0) {
    console.log("We need to find some users");
}
else {
    console.log("Remove Users");
}
;
