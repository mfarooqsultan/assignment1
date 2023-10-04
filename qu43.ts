//43.	Unchanged Magicians: Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


let magicianName =["henry","David","Paul"];

    console.log(magicianName);

function show_magicians(){
function make_great(){
    let emptyMagician =[]
    for(let i =0;i< magicianName.length;i++){
          emptyMagician[i] = (`The great ${magicianName[i]}.`)}
        console.log(emptyMagician)         
};
make_great();
};
show_magicians();