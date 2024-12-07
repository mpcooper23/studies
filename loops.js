/**
 *********************************=> Loops <=************************************
 * 
 * 0: aptly-named, loops iteratate through complex data such as arrays and objects. We use specific types of 
 * loops depending on the data type, the times we want to loop through the item, and other factors such as 
 * knowing the length property or the amount of keys in an object. 
 * 
 * When we iterate through an array or object, it's helpful to think in terms of each loop iteration 
 * "isolating" a singular element at a time to perform whatever action is specified in the loop's code block.
 * 
 * The loop's syntax includes a keyword, followed by parenthesis, which is then followed by a code block.
 * 
 * 1. => while loops: best for instances where we want the loop to iterate and run its code block at least once,
 * these loops are used when we don't know exactly how many times we want to iterate. It's important to 
 * specify a incremental/decremental condition, or an inifinite loop will occur, crashing the program.
 * 
 * => for loops: conversely to the while loop, a for loop is used when we know how many times we want to iterate
 * through a piece of data. We can set a stopping point in our conditions to indicate the number of iterations the 
 * loop performs. A third condition is set to specify the incremental/decremental direction. 
 * 
 * => for-in loops: used to iterate through objects, the for-in loop's syntax triggers iteration through each key 
 * in a given object. As each key is isolated, we can retrieve its value, or manipulate individual elements within
 * the object. Since there is no inherent order to key:value pairs (unlike arrays and strings, which have indexes
 * as entry-points for each element.), for-in loops indentify an object's key's names. Remember to only use a for-in
 * loop when you have to access each key in the object; otherwise, use dot notation to access the individual key. 
 */ 

for (let key in object){
   console.log(object[key])//logs each value as string
   console.log(object.key)//avoid the common error of using dot notation, which results in "undefined", since
}                          //the computer interprets this as a literal key that exists in the object.

 /* 
 * 
 * 2. Be able to loop any number of times, forward counting up to some limit, backward counting down to 0.
 * 
 * => To set a loop's limit, input the stop condition in the for-loop syntax:
 */

 for (let i = 0; i < string.length; i++){ //here, a start variable is set at 0; the stop condition is set to the end of a string's length
   console.log(string[i]) // the third and final inputted value increments the index variable
 }                       //finally, the return statement in the code block logs each iteration
 
/* 
 * 
 * 3. Loop over an Array, forwards and backwards.
 */

for(let i = string.length - 1; i >= 0; i--){ // here, to reverse the loop, the start condition is set at the end 
   console.log(string[i])                    //of the string; the stop condition is set to a number; a decremental
}                                           //operator sets the input to decrement instead of increment

 /* 4. Loop over an Object.
 */

 //Example of a reverse for loop used in a function
 function reverseString(input) {
    let stringRev = ''//creating output string
    for (let i = input.length - 1; i >= 0; i--){//creating reverse for loop 
        stringRev += input[i] //adding iterated values to the output string
     } return stringRev //returns output string
}

