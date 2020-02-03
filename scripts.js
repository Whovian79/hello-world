// create a variable "timeOfDay" and assign it a string
const timeOfDay = "Evening";

// create a variable "greeting" that references a template literal
const greeting = `Top o' the Mornin' to ya!`;

// use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
console.log(`Stay warm this ${timeOfDay}.`);

// print "greeting"
console.log(`${greeting}`);

// create a new variable, but do not assign it a value
//let myEx;

// print the variable and its type
//console.log(typeof myEx);
// ? what type should we expect?
//Undefined

// assign the variable a value that indicates the variable is purposely blank
let myEx = null;
// ? what value should we assign?
//null

// print the variable and its type again
console.log(typeof myEx);
// ? what type should we expect?
//Object

// try to print a variable that does not exist
console.log(navalConstructionContract);
// ? what should we expect to print in the CLI?
//reference error as we didn't assign information/space holder to the variable

// print "greeting" again
console.log(`${greeting}`);
// ? will this line run?
//No. Computers read from top to bottom and and the un-assigned variable is in the way.

// create a variable called "name" that references a string
const name = "The Doctor";

// create a variable called "favoriteSong" that references a string
let favoriteSong = "River";

// create a variable called "wage" that references a number
let wage = 9;

// create a variable called "age" that references a number
let age = 209;

// create a variable called "onlyChild" that references a boolean
let onlyChild = false;

// create a variable called "satisfied" that references a boolean
let satisfied = false;

// create a variable called "favoriteThing" that references ANY primitive value
let favoriteThing = "TARDIS";

// print the data type of "favoriteThing"
console.log(`${favoriteThing}`);

// ! You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Melody Pond";

// ! You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = 42;

// ! Happy Birthday!
// Reassign "age" to a new value
age = 1103;

// ! You got a big raise at work.
// Reassign "wage" to a new value
wage = 1701;

// ! Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true;

// use "console.log()" and "+" to print a sentence that includes two variables
console.log(`My name is ${name} and my favorite Song is ${favoriteSong}.`);
