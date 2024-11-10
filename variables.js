/**
 * 0: Variables are named containers for storing data and are scoped. One might think of a variable 
 * like a tentacle that points to a piece of data. This means that a variable that is globally scoped 
 * can be invoked or 'reached' at any subsequent point in the program.
 * 
 * 1. Declaration and Assignment: In order to create a variable we must first `declare` it. 
 * In general, you can declare the variable with a value or not. Once the value is added (after the 
 * '=' assignation), it is "initialized." Until it is initialized, the declared variable has a "undefined"
 * value:*/
 
var num; // num variable declared, but not initialized with a value.
 
console.log(num); // returns undefined until initialized 
 
var num = 23; // num initialized with 23
 
/**
 *
 * 2. Var, let, const: There are three declarative keywords that can be used to declare variables--var, let, const. 
 * 
 * // => "var": during parsing, var is hoisted but left undefined. Also, "var"-declared values are
 * // => "let":
 * // => "const":
 * 
 * 3: Hoisting: During the Javascript reader's compilation phase (the first step of its parsing a program), the program scans 
 * the data and pulls up certain variables, prioritizing named functions and varaibles declared with "var" first. Ultimately, 
 * the prioritized data that is pulled to the top of the code script, or "hoisted", is read first during the reading phase.  
 */

