// Iteration 1: Names and Input
let hacker1 = "Javier";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Mich";
console.log(`The driver's name is ${hacker2}`);

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


//