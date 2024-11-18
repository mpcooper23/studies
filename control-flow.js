/**
 *****************************************=> Control Flow <=**********************************************
 * 
 * 0: Control flow refers to the pathways developers create with conditional 
 * statements. 
 * 
 * 1. If: the first condition in a conditional chain uses the if keyword followed 
 * by paranthesis between which we set the boolean according to our logic. 
 * 
 * 2. Else-if: this condition always follows the first "if" statement. 
 * 
 * 3. Else: this condition does not require parentheses (i.e. a set condition)
 * 
 * 4. Switch: this statement
 * 
 * 
 * 
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