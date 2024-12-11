/**
 * ***********************=> Funky Functions <=***************************
 * 
 * 0: Functions are pieces of reusable code (e.g. "set of instructions") that can be invoked at any point in a program. 
 * Like simple data declared through variables, a function exists as a piece of data stored in memory. Functions differ 
 * in that they can be invoked with arguments, or '"called" with data placed between the syntax's parentheses. The 
 * function's parameters act as placeholders, or slots waiting to be filled with the argument values. In this way, functions are 
 * codes whose abstractions allow for inputting of specific cases. 
 * 
 * 1. The two phases to using functions: First we must declare. Next we can execute (e.g. invoke, or call) a function 
 by placing arguments in the parentheses or placeholders.
 * 
 * 2. What's the difference between a function's parameters and arguemnts PASSED to a function?
 
 * 
 * 3. What's the syntax for a NAMED function?
 */ 
 function getRandom(array){
 let randomIndex = Math.floor(Math.random() * array.length)
 return randomIndex
 }
/* 
 * 4. How do we assign a function to a variable?
 */

let randomAnimal = function getRandom(array){
return Math.floor(Math.random() * array.length);
}

 /* 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
 * 
 * 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 * 
 * 7. Closures: Functions for closures around the data they house. If an object returned from the Function and is held in memory somewhere 
 (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 
 */