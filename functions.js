/**
 * ***********************=> Funcky Functions <=***************************
 * 
 * 0: Functions are pieces of reusable code (e.g. "set of instructions") that can be invoked at any point in a program. 
 * Like simple data declared through variables, a function exists as a piece of data stored in memory. Functions differ 
 * in that they can be invoked with arguments, or '"called" with data placed between the syntax's parentheses. The 
 * function's parameters act as placeholders, or slots waiting to be filled with the argument values. In this way, functions are 
 * codes whose abstractions allow for inputting of specific data cases. 
 * 
 * Functions are FIRST-CLASS OBJECTS, meaning that JVS treats them as "first-class citizens", a value that's just another
 * type of object:
 *  -- it can be stored as a value in a variable
 *  -- it can be returned by another function
 *  -- it can be passed into another function as an argument
 *  -- it can be stored in an array or within an object
 *  -- it can have its own methods and properties
 */ 

//===> As an example of its first-class capabilities, here's a function that takes
    // another function that modifies an array of strings
function modifyStrings(strings, modify) {
   //creating outlet array
   let modified = [];
   //for loop to iterate through strings array
   for(let i = 0; i < strings.length; i++){
      let mod = modify(strings[i]) // Modifying strings with inner-function invocation
  modified.push(mod) //collecting results by pushing them to outlet arr. 
   }
   return modified//returning modified strings in array
}

 /* 1. The two phases to using functions: First we must declare. Next we can execute (e.g. invoke, or call) a function 
 by placing arguments in the parentheses or placeholders.
 * 
 * 2. What's the difference between a function's parameters and arguemnts PASSED to a function?
 Parameters are placeholders that are signified with (). The parameter can be empty, or it can include a sort of abstract keyword
 that essentially acts as a space that you can plug in with any global variable.
 * 
 * 3. What's the syntax for a NAMED function? The names, followed by the keyword "function" are camel-cased and generally related 
 to the function's purpose
 */ 

 function getRandom(array){
 let randomIndex = Math.floor(Math.random() * array.length)
 return randomIndex
 }

/* 
 * 4. How do we assign a function to a variable? Since functions are pieces of data, we can declare with a var, let, const variable. 
We call these "function expressions":
 */

let randomAnimal = function getRandom(array){
return Math.floor(Math.random() * array.length);
}

 /* 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value. How do we specify inputs, and how do we specify outputs?
 * 
 * 6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
 * ==> This is due to block scoping, or the phenomenon where a function creates its own environment for declaring variables. In this block
 * scope, variables declared within the function can 'see' global variables, but not the other way around. 
 */ 

 let globalVar = "Functions and other block-scoped data can see me, but I cannot see them!";

 function scopedVar(){
    let blockScopeVar = "Global variables can't see me, but I can see them!";
    console.log(blockScopeVar)
 }

 /* 7. Closures: Functions for closures around the data they house. If an object returned from the Function and is held in memory somewhere 
 (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 
 */