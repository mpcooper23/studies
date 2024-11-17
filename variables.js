/**
 * **************************************=> Variables <=******************************************
 * 
 * 
 * 0: Variables are named containers for storing data and are scoped. One might think of a variable 
 * like a tentacle that points to a piece of data. This means that a variable that is globally scoped 
 * can be invoked or 'reached' at any subsequent point in the program.
 * 
 * 1. Declaration and Assignment: In order to create a variable we must first `declare` it. 
 * You can declare the variable with a value or not (i.e. not intialize the variable). Once the value 
 * is added (after the '=' assignation), it is assigned or "initialized." Until it is initialized, the 
 * declared variable has a "undefined" value:
 * 
 * 
 * */
 
var num; // num variable declared, but not initialized with a value.
 
console.log(num); // returns undefined until initialized 
 
var num = 23; // num now initialized with 23

console.log(num) //returns 23 now
/**
 *
 * 2. Var, let, const: There are three declarative keywords that can be used to declare variables--var, 
 * let, const. 
 * 
 * // => "var": shorthad for "variable'. During parsing, var is hoisted but left undefined. Also, 
 * "var"-declared values leak out into the global scope when used in a block scope.
 * 
 * // => "let": the "let" keyword was added to ES6 in 2015, and allows developers to declare/initialze 
 * values without worrying about scope leakage.
 * 
 * // => "const": also added in ES6, const is shorthand for "constant"; the "const" keyword cannot be 
 * changed once initialized.
 */
 
var movies = ['Blue Velvet', 'Eraserhead', "Mulholland Drive"]; //array of string values declared/initialized with var
let director = 'David Lynch' // variable initialized with "let" keyword
const actor = {firstName: 'Kyle', lastName: 'MacLachlan'} //const variable initialized with an object
 /* 
 *
 * 3: Hoisting: During the Javascript reader's compilation phase (the first step of its "parsing" a program), 
 * the program scans the data and pulls up certain variables, prioritizing named functions and varaibles declared 
 * with "var" first. Ultimately, this prioritized data is pulled to the top of the code script, or "hoisted", 
 * during the initial reading phase.  
 * 
 * => **Along with the "var" keyword being prioritized, it has the behavior/side-effect of "leaking" out of a 
 * block scope and into the global scope. Thus, for example, a "var" variable placed inside a function's block 
 * scope will be pulled into the global scope, which tends to impact the developer's program in unintentional ways 
 * (i.e. block-scoped "var"-keyworded variables leaking into the global scope) 
 * 
 * => **Another important facet of hoisting is the prioritization of functions. This means that a function can be 
 * invoked no matter where it appears in the script. What you see is not what you get with hoisting, then: always 
 * assume variables and functions are pulled to the top, and that your "var" will leak into the global environ when 
 * used in block scopes.
 */


