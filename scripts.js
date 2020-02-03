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
