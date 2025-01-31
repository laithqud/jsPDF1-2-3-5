function checkEligibility(yearOfBirth) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - yearOfBirth;

    if (age > 60) {return"You may join the seniors’ program."} 
    else if (age > 30) {return "You are not eligible. You may join other programs."} 
    else if (age >= 18) {return "You are eligible. Start your application."}
    else {return "You may join the kids' program."}
}

console.log(checkEligibility(1989))

//----------------------------------------------------------------------------------------------


function switchCase(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}

console.log(switchCase("OrAnGe"));  

//----------------------------------------------------------------------------------------------

function toCamelCase(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
    }
    let camelCaseStr = words.join('');
    return camelCaseStr;
}


console.log(toCamelCase("Coding Academy by Orange")); 

//----------------------------------------------------------------------------------------------

function removeElementFromArray(array, elementToRemove) {
    const index = array.indexOf(elementToRemove);
    if (index > -1) {
        array.splice(index, 1);
    }
    return array;
}

console.log(removeElementFromArray(["Coding", "Academy", "By", "Orange"], "By"));  


//----------------------------------------------------------------------------------------------

function isOddOrEven(number) {
    if (number % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}


//----------------------------------------------------------------------------------------------

function isNumber(input) {
    return typeof input === 'number' && !isNaN(input);
}

//----------------------------------------------------------------------------------------------

function larger(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else {
        return num2;
    }
}

//---------------------------------------------------------------------------------------------

function checkTriangleType(side1, side2, side3) {
    if (side1 === side2 && side2 === side3) {
        return 'equilateral';
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        return 'isosceles';
    } else {
        return 'scalene';
    }
}

//--------------------------------------------------------------------------------------------

function isNumberInRange(number, start, end) {
    return number >= start && number <= end;
}

//--------------------------------------------------------------------------------------------

function isLeapYear(year) {
    if (year % 4 === 0) {
        if (year % 100 === 0) {
            if (year % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }
}
