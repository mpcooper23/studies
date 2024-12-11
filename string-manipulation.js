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
 * 2. With String Methods: affixing these to the end of any string will produce an
 altered version of that string. Some common methods that bootcampers should expect 
 to use:
 * 
 ===> .length - logs a numerical representation of length
 *
 ===> .charAt() - accepts index and returns the character at that index
 *
 ===> .toUpperCase() - logs all uppercase characters; in the parentheses, set the index you wish to uppercase
 *
 ===> .toLowerCase() - logs all lowercase; in parantheses, set the index you wish to lowercase
 *
 ===> .slice(start index, end index) - extracts a substring based on inputted start and end indexes
 (also see .substring(start, end), which is essentially produces the same output)
 *
 ===> .concat() - similar to using concatenation operators, only you place the strings to concat inside 
 parantheses and separate each input with a comma
 *
 ===> .join() - this is an array method that "joins" all elements in an array into a single string
 *
 ===> .split() - often used in conjuction with .join() [for arrays] or .concat() [for strings], this splits
 the characters of a string into substrings
 *
 ===> Template Literals: 
 */