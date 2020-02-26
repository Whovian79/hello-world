//IMPLICIT CONVERSION
// || means OR
// If first EXPRESSION is 'truthy' we don't EVALUATE the right hand-side.
//const name = prompt("What is your name?") || "No name entered!";
//console.log(name);

//TODO: Using 'while' keep 'prompting' while the name field is blank.
//'name' will be a STRING, but it might be blank.
let name = prompt("What is your name?");
//If 'name' is blank, then '!' will convert to a Boolean (NOT FALSE)
//If 'name' is NOT blank, then '!' will convert to a Boolean (NOT TRUE)
while (!name) {
  name = prompt("What is your name?");
}
console.log(name);

let age = prompt("what is your age?");
age = Number(age);
console.log(Boolean(NaN));

//TODO: If the user enter something the EXPLICITLY CONVERTS to "NaN", alert them.
if (!age) {
  alert("This is not a number!");
}
