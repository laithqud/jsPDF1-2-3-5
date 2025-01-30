
function strToArr(str){
    return str.split(" ");
}
console.log(strToArr("coding orange"))

// ------------------------------------------------------------------------------

function digitStar(str){
    let x=str.split("")
    for(let i=0; i < x.length;i++){
        if(i<=6){
            x[i]="*"
        }
    }
    return x.join("")
}
console.log(digitStar("0776807777"))

// ------------------------------------------------------------------------------


function convertEmail(str){
    let x=str.split("")
    for(let i=4; i < x.length;i++){
        if(i<=10){
            x[i]="."
        }
    }
    return x.join("")
}
console.log(convertEmail("laithqudahh@gmail.com"))


// ------------------------------------------------------------------------------
function firstLetterUpperCase(str){
    let x=str.split("")
    x[0]=x[0].toUpperCase()
    return x.join("")
}
console.log(firstLetterUpperCase("laith"))


// ------------------------------------------------------------------------------

function elementsFirstLetterUpperCase(str){

    let words=str.split(" ")

    for(let i=0;i<words.length;i++){
        let letters=words[i].split("")
        letters[0] = letters[0].toUpperCase();
        words[i] = letters.join(""); 
    }
    return words.join(" ")
}
console.log(elementsFirstLetterUpperCase("coding academy by orange"))


// ------------------------------------------------------------------------------

function flipNum(num){
    let result = ''; 
    for (let i = num.length - 1; i >= 0; i--) {
        result += num[i]; 
    }
    return result; 
}
console.log(flipNum("1234"))

// ------------------------------------------------------------------------------
function swapNum(a,b){
    a = a + b;
    b = a - b;
    a = a - b;
    return [a, b];
}
console.log(swapNum(3,4))

// ------------------------------------------------------------------------------

function removeIndex(str, index) {
    return str.slice(0, index) + str.slice(index + 1)
}

console.log(removeIndex("orange", 3));

// ------------------------------------------------------------------------------
function mergeStrings(str1, str2) {
   
    str1 = str1.slice(1);
    str2 = str2.slice(1);
    
    return str1 + str2;
}

console.log(mergeStrings("alai", "bth")); 

//-------------------------------------------------------------------------------


function isFirstOrLast(char, str) {
    if (str.charAt(0) === char || str.charAt(str.length - 1) === char) {
        return true;
    } else {
        return false;
    }
}

console.log(isFirstOrLast("o", "orange")); 
console.log(isFirstOrLast("z", "orange")); 

//----------------------------------------------------------------------------------

function stringToArray(str) {
    return str.split(" ");
}

console.log(stringToArray("Coding Academy by Orange"));

//----------------------------------------------------------------------------------


function sortStringAlphabetically(str) {
    return str.split('').sort().join('');
}

console.log(sortStringAlphabetically("orange"));



