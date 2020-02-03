const name = "AJ"; //Reserves some space in memory and assign it a name. Cannot make changes with "const".
let age = 23;
// age =24; //"Let" key allows changes to variable.

// const modelTypeOfTardis = 40;

//we are accessing an OBJECT called 'console' and using DOT NOTATION to access a KEY.
//That KEY is a METHOD, so we INOVKE it with ().
// We also pass in an ARGUMENT as a STRING.
//ARGUMENTS provide additional information that a METHOD needs to do its job.
console.log("Wold, hello!");
console.log(
  "My name is " + name + "and I wish my age was still " + age + "years."
);

// Template Literals and Interpolation
console.log(`My name is ${name}`);

//Java Script is a Dynamically Typed language. . . You are free to swap/change data at anytime.

//Create a variable 'timeOfDay' and assign it a string
const timeOfDay = `Morning`;
console.log(`It should be illegal to force people to get up at  ${timeOfDay}`);

//console.log(typeof timeOfDay); //tells us the type of data

//JS will COERCE our data types into whatever it feels is appropriate. #IMPLICIT COERCION.
console.log("hello" + 22);
//EXPLICIT COERCION
console.log(Number(false));

console.log(parseInt("123.45"));
console.log(parseFloat("123.45"));
