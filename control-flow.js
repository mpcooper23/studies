/**
 *****************************************=> Control Flow <=**********************************************
 * 
 * 0: Control flow refers to the pathways developers create with conditional 
 * statements. 
 * 
 * 1. If: individual if statements are entities within themselves, meaning they are 
 * treated independently. It will always execute if it's condition is true. 
 */

 if (1 < 2) {
console.log('if statement 1')
 }

 if (1 < 3){
console.log('if statement 2')
 }

 /* Otherwise, the first condition in a conditional chain uses the if keyword followed 
 * by paranthesis between which we set the boolean according to our logic. 
 */ 

if (1<2) {
    console.log('if "if" is true, then the conditional chain will not pass this initial statement')
}else if (1<3){
    console.log('even though this condition is true, it will never run because "if" has already ended chain')
}else (1<4){
    console.log('another true condition that does not run because the first condition, "if", stops chain')
}

 /* 2. Else-if: this condition always follows the first "if" statement. 
 * 
 * 3. Else: this condition does not require parentheses (i.e. a set condition)
 * 
 * 4. Switch: this statement
 * 
 * 
 * 5. Ternary Operator: shorthand for if-else statement; use this to acheive DRY, cleaner code. 
 * 
 * 
 */

 // Example of a function that uses an if statement to check conditions/set logic according to a specific control flow
 function sortAscending(stringOne, stringTwo) {
if (stringOne > stringTwo){//"if" statement checks if first string is higher in alphabetical order than the second
    return - 1
}else if (stringOne < stringTwo){//"else if" statement to check opposite condition
    return 1
}else {return 0}//"else" statement to establish condition 3, or if the strings are equal
}

//Example of a switch statement used in a function
function caseInSwitch(val){
switch(val){
    case 1: 
    return 'alpha';
    case 2:
    return 'beta';
    case 3: 
    return 'gamma'
    case 4: 
    return 'delta'
}
return answer;
}
caseInSwitch(1)//calling function with 1 as the argument