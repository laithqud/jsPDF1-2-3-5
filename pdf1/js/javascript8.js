for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
}

let i=1
while (i<=50){
    if(i%2==0){
    console.log(i)
    }
    i++
}
//====================================================================

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
        console.log(i)
    }
}
//===================================================================

for(let i=1;i<=50;i++){
    if(i%2==0){
        console.log(i)
    }
    else{
        console.log(i)
    }
}
//=====================================================================

for(let i=1;i<=100;i++){
    if(i%3==0){
        console.log("Fizz")
    }
    else if(i%5==0){
        console.log("Buzz")
    }
    else if(i%3==0 && i%5==0){
        console.log("FizzBuzz")
    }
    else{
        console.log(i)
    }
}
//==============================================================

function fizzBuzz(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz")
    } else if (n % 3 === 0) {
        console.log("Fizz")
    } else if (n % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(n)
    }
}

for (let i = 1; i <= 100; i++) {
    fizzBuzz(i)
}
//===============================================================================

function fizzBuzzRecursive(n, limit) {
    if (n > limit) {return}

    if (n % 3 === 0 && n % 5 === 0) {
        console.log("FizzBuzz")
    } else if (n % 3 === 0) {
        console.log("Fizz")
    } else if (n % 5 === 0) {
        console.log("Buzz")
    } else {
        console.log(n)
    }

    fizzBuzzRecursive(n + 1, limit);
}

fizzBuzzRecursive(1, 100);
//==============================================================

function convertToBanknotes(amount, banknotes) {
    let result = []
    
    for (let i = 0; i < banknotes.length; i++) {
        while (amount >= banknotes[i]) {
            amount -= banknotes[i];
            result.push(banknotes[i]);
        }
    }
    
    return result;
} 

console.log(convertToBanknotes(57, [25, 10, 5, 1]))
//==============================================================

function countCharacterOccurrences(str, char) {

    let lowerCaseStr = str.toLowerCase()
    let lowerCaseChar = char.toLowerCase()
    
    let count = 0
    
    for (let i = 0; i < lowerCaseStr.length; i++) {
        if (lowerCaseStr[i] === lowerCaseChar) {
            count++
        }
    }
    
    return count
}

console.log(countCharacterOccurrences( "Coding Academy by Orange", "o")) 
//=========================================================================

for (let i = 0; i <= 20; i++) {
    console.log(i)
}
for (let i = 3; i <= 29; i += 2) {
    console.log(i)
}
for (let i = 12; i >= -14; i -= 2) {
    console.log(i)
}
for (let i = 50; i >= 20; i--) {
    if (i % 3 === 0) {
        console.log(i)
    }
}
//==========================================================================

let myString = 'CodingAcademy'
let myArray = [7, 500, 'KH404', 'black', 36]

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i])
}

for (let i = myString.length - 1; i >= 0; i--) {
    console.log(myString[i])
}

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

for (let i = myString.length - 1; i >= 0; i--) {
    console.log(myString[i])
}
//================================================================

let numbers = [7, 23, 18, 9, -13, 38, -10, 12, 0, 124]
let evens = []
let odds = []


for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i])
    } else {
        odds.push(numbers[i])
    }
}

console.log("Evens:", evens)
console.log("Odds:", odds)

//=========================================================================

function generateMeals(numMeals) {
    const proteins = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans']
    const grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers']
    const vegetables = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus']
    const beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea']
    const desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi']

    function getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    let meals = new Set();

    while (meals.size < numMeals) {
        let meal = [
            getRandomItem(proteins),
            getRandomItem(grains),
            getRandomItem(vegetables),
            getRandomItem(beverages),
            getRandomItem(desserts)
        ];
        
        meals.add(meal.join(', '))
    }

    return Array.from(meals)
}

let numMeals = 5
let meals = generateMeals(numMeals)

console.log(meals)
