// Iteration 1: Names and Input
let hacker1 = "Mich";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Javier";
console.log(`The navigators's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
   } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }


// Iteration 3: Loops

// Spaced and capitalized:

let capitalizedName = (hacker1.toUpperCase());
let spacedName = "";
let i = 0;

for ( i = 0 ; i < capitalizedName.length ; i++ ) {
    spacedName += capitalizedName[i] + ' ';
}

console.log(spacedName);

// Name reverse:

let nameReversed = "";
let lastIndex = hacker2.length -1;
let index = lastIndex;

for ( index = lastIndex ; index >= 0; index--) {
    let char = hacker2[index];
    nameReversed += char;
}

console.log(nameReversed);


// lexicographic order:
/*let hacker1 = "Javier";
let hacker2 = "Mich";
*/

switch(true) {

    case hacker1 < hacker2:
    console.log("The driver's name goes first.");
    break;

    case hacker1 > hacker2:
    console.log("Yo, the navigator goes first, definitely.");
    break;

    case hacker1 === hacker2:
    console.log("What?! You both have the same name?");
    break;
  }



