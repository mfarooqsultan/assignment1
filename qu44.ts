//44.	Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

let tikka_sandw =["chicken","tikka","mushr"]
console.log("Tikka sandwich order with items:");

let sandwich_summary=(sandw:string[])=>{
sandw.map((tikka_sandw:string)=>{console.log(tikka_sandw)
})
};

sandwich_summary(tikka_sandw);

let club_sandw =["mayo","eggs","veggie"]
console.log("Club sandwich order with items:");

let sandwich_summary1=(sandw:string[])=>{
sandw.map((club_sandw:string)=>{console.log(club_sandw)
})
};
sandwich_summary1(club_sandw);