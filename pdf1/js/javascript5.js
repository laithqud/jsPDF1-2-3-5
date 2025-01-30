

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

console.log(vegetables.pop()) //Remove the last item from the vegetable array. 
console.log(fruit.shift()) //Remove the first item from the fruit array.
console.log(fruit.indexOf("orange")) // Find the index of "orange." 
console.log(fruit.push(fruit.indexOf("orange"))) //Add that number to the end of the fruit array
console.log(vegetables.length) //Find the length of the vegetable array. 
console.log(vegetables.push(vegetables.length)) //Add that number to the end of the vegetable array. 
let food= fruit.concat(vegetables)//Put the two arrays together into one array. Fruit first. Call the new Array "food".
console.log(food.splice(4, 2)) //Remove 2 elements from your new array starting at index 4. 
console.log(food.toReversed()) //Reverse your array. 
console.log(food.toString()) //Reverse your to string. 