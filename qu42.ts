//42.	Great Magicians: Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call make_great() to see that the list has actually been modified.

 let greatMagicians =["Henry","David","Joseph"];

 let make_great = (newMagician:string[])=>{
newMagician.map((greatMagicians:string)=>{console.log("The great " + greatMagicians)
}
)
 };
  make_great(greatMagicians);
