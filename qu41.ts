//41.	Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magicians= ["kohli","jadeja","kumar"];
function show_magicians(magicians:string[]){
    for (let x=0;x< magicians.length;x++){console.log(magicians[x])
    }
};
   show_magicians(magicians) ;
// OR
let magicians1 =["kohli","jadeja","kumar"];
 let show_magicians1=(newName:string[])=>{
    newName.map((magicians1:string)=>{console.log(magicians1)
    }
    )
};
show_magicians1(magicians1);














