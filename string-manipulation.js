/**
 ************************=> String Manipulation <=***************************
 * 
 * 0: String data is primitive (wink-wink), but really just another global object
 * with its own built-in properties. These "methods" allow us to mutate the data,
 * or simply return indexes of characters, as an example. 
 * 
 * 1. With Operators: We can manipulate strings using operators such as + and =, 
 * or even "==" and "===", if we are checking conditionality.
 * 
 * ===> Concatenation (creates new string using the + operator): We can suture together
 * (like a Frankenstein's monster, when concatenation becomes complex/convoluted) spaces, 
 * punctionation, and other symbols, too:
 */

let str1 = "Operation";
let str2 = "Spark";
let concatenatedStr = str1 + " " + str2 + "!" + " ==> " + "# 1!";
console.log(concatenatedStr) //logs "Operation Spark! ==> '# 1!"
 /* 
 * ===> Comparison Operators (boolean checks to see if strings are equal or loosely equal, 
 or not equal [when using the bang operator)])
 */

(str1 === str2) //returns false
(str1 !== str2) //returns true

 /*
 * 2. With String Methods: 
 * 
 * 
 */