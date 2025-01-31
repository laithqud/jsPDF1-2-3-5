let arr= [1, 2, 3, 4, 5] 
arr.push(6)

arr.forEach(print)

function print(element){
    console.log(element)
}

//----------------------------------------------

let arr2=[1,2,3,4,5]

let squares=arr2.map(square)

function square(element){
    return Math.pow(element, 2)
}

console.log(squares)
//----------------------------------------------

let arr3=[1,2,3,4,5]

let evenNumbers= arr3.filter(evenNumber)

function evenNumber(element){
    return element%2 === 0
}

console.log(evenNumbers)
//-----------------------------------------------

let arr4=[1,2,3,4,5]
let summation= arr4.reduce(sumElements)

function sumElements(accumulator,element){
    return accumulator+element
}
console.log(summation)
//-----------------------------------------------

let arr5 = ["pinaple", "banana", "cherry"];

arr5.sort();

console.log(arr5); 
//-----------------------------------------------

let arr6 = ["apple", "banana", "cherry"];

arr6.reverse();

console.log(arr6); 
//------------------------------------------------
let arr7_1=[1,2,3], arr7_2=[4,5]

let arr7_3=arr7_1.concat(arr7_2)

console.log(arr7_3)
//-----------------------------------------------

let arr8=[1,2,3,4,5,6]
console.log(arr8.slice(2,4))
//-----------------------------------------------

let arr9=[1,2,3,4,5]
console.log(arr9.splice(3).length)
//----------------------------------------------

let arr10=[1,2,3,4,5]
console.log(arr10.indexOf(3))

//---------------------------------------------

let arr11 = [1, 2, 3, 4, 5]
console.log( arr11.join(','))

//-----------------------------------------------

let arr12 = "1, 2, 3, 4, 5"
console.log( arr12.split(','))
//----------------------------------------------

let arr13=[1,2,3,4,5]
console.log(arr13.length)
//----------------------------------------------

let arr14 = [1, 2, 3, 4, 5]

for (let element of arr14) {
    console.log(element);
}
//----------------------------------------------

let arr15 = [1, 2, 3, 4, 5]

for (let index in arr15) {
    console.log(arr[index])
}
//----------------------------------------------

let arr16=[1,2,3,4,5]

console.log(Array.isArray(arr16))

//---------------------------------------------

let obj17= {0: "a", 1: "b", 2: "c", length: 3}
console.log(Array.from(obj17))
//---------------------------------------------

let x1=1, x2=2, x3=3
console.log(Array.of(x1,x2,x3))

//--------------------------------------------

let arr18=[1,2,3,4,5]
console.log(arr18.fill(0,0,3))
//---------------------------------------------

let arr19=[1,2,3,4,5]
console.log(arr19.copyWithin(1,0,1))
console.log(arr19.copyWithin(2,1,2))