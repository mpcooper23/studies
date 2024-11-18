/**
 * 
 *  ***********************=> Data Types <=***************************
 * 
 * 0: Variable declarations bind data. There are simple and complex data types.
 * Simple are static and complex can mutate. 
 * 
 * 1. Number: intergers, which include those that use decimals 
 */

let num = 23;

/* 2. String: characters bracketed by quotations. You may use either single or 
 * double quotes, but be consistent with your usage. 
 */

let string = 'string'

/* 3. Boolean: true or false values. Think of this type of data as a sort of 
 * light switch, whereby you can instruct the computer to take different paths
 * depending on specific boolean conditions. 
 */ 

let bool = true;

 /* 4. Array: zero-indexed, bucket-like container. This complex data type stores other 
 * simple data types, as well as functions. We use bracket notation to access each element. 
 * Elements start at the 0 index. We use for loops to iterate through array elements.
 */

 let array = [1, 'two', {firstName: 'Bobby', lastName: 'Brown'}, true]

 /* 5. Object: unlike arrays, which are zero-indexed based, objects store key:value pairs,
 * which can be accessed using dot notation or bracket notation. We use for-in loops to access
 * each key in the object. 
 */ 

let obj = {
artist: 'Cinderella',
album: 'Long Cold Winter',
year: '1988',
genre: 'Hair Metal'
}

 /* 6. Function: block-scoped and first-class objects in that they can be plugged into other 
 * functions (i.e. higher-order functions) and set as a value to a variable. 
 */ 

//example of a function that has two parameters 
 function beginsWith(string, char) {
    if (string[0].toLowerCase() === char.toLowerCase()){//conditional if statement to check if first 
        return true;//character on input string is strictly equal to the inputted char;
    }else {//used toLowerCase() to account for case insensitivity 
        return false;
    }
}
 
 /* 7. undefined:
 */ 

 let val; // uninitialized values return undeclared
 
 /* 8. null:
 * 
 * 9. NAN: "Not a Number"
 * 
 * 10. Infinity and -Infinity: 
 * 
 * 11. What is the difference between primitive/simple and complex data types?
 * 
 * 12. Primitive values are passed to a function BY COPY, complex values are BY REFERENCE. 
 * What does that mean, and how are they different?
 */