"use strict";
//14.	Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
Object.defineProperty(exports, "__esModule", { value: true });
exports.inivitedFriends = void 0;
let inivitedFriends = ["Person1", "Person2", "Person3", "Person4"];
exports.inivitedFriends = inivitedFriends;
for (let invitation of inivitedFriends) {
    console.log(`Hi ${invitation},I am sending you my warmest invitation for dinner party.`);
}
;
