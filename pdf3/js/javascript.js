function Age(age){
    if(age>18){return "You are an adult"}
    return "You are not an adult"
}
//-------------------------------------------------------


function Score(score){
    if(score>=50){return "You failed the test"}
    return "You are not an adult"
}
//-------------------------------------------------------

function Name(name){
    if(name=="John"){return "Hello, John"}
    return "You are not John"
}
//-------------------------------------------------------
function Day(day){
    if(day=="Saturday" || day=="Sunday"){return "it's not a weekday"}
    return "it's a weekday"
}
//-------------------------------------------------------
function Divisable(num){
    if(num%2==0){return "The number is even"}
    return "the number is odd"
}
//-------------------------------------------------------
function isChar(char){
    if(typeof(char)==='string' && char.length==1){return "its a letter"}
    return "its not a letter"
}
//-------------------------------------------------------


function isArray(array){
    if(Array.isArray(array)===true){return "its an array"}
    return "its not an array"
}
//-------------------------------------------------------

function isPositive(x){
    if(x>0){return "its positive number"}
    return "its not positive number"
}
//-------------------------------------------------------
function isNegative(y){
    if(y<0){return "its negative number"}
    return "its not negative number"
}
//-------------------------------------------------------
function multy3(z){
    if(z%3==0){return "z is a multiple of 3"}
    return "z is not a multiple of 3"
}
//-------------------------------------------------------
function GPA(gpa){
    if(gpa>3.0){return "Congratulations, you have a good GPA!"}
    return "do your best"
}
//-------------------------------------------------------
function Password(password){
    if(password.length>=8){return "Your password is strong"}
    return "Your password is not strong"
}
//-------------------------------------------------------
function workAge(age){
    if(age>=18 ){
        if (age<=65 ){return "You are of working age"}
    }
    return "You are not of working age"
}
//-------------------------------------------------------

function Color(color){
    switch(color){
        case 'red' :
        return "color is a primary color"
        case 'blue' :
        return "color is a primary color"
        case 'green' :
        return "color is a primary color"
        default:
        return "color is not a primary color"
    }
}
//-----------------------------------------------------------

function isNumber(input) {
    
    if (isNaN(input)) {
        return input + " is not a number";
    }
    
    const num = Number(input);
    
    if (!isNaN(num)) {
        return input + " is a valid number";
    } else {
        return input + " is not a number";
    }
}


