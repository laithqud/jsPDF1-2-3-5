for(let i=1;i<=10;i++){
    console.log(i)
}

//--------------------------------------------------------

let i=1
while(i<=10){
    console.log(i)
    i++
}

//---------------------------------------------------------

let array=[1,2,3,4,5]
for(let i=0;i<array.length;i++){
    console.log(array[i])
}

//---------------------------------------------------------

for(let i=0;i<=10;i++){
    if(i%2==0){
        console.log(i)
    }
}

//--------------------------------------------------------

let x=0
for(let i=0;i<=10;i++){
    x+=i   
}
console.log(x)

//--------------------------------------------------------

let arr=[3,9,8,12,11]
let greater=arr[0]
for(let i=1;i<arr.length;i++){
      if(greater<arr[i]){
        greater=arr[i]
      }
}
console.log(greater)

//----------------------------------------------------------

let arr2=[2,9,0,-1,7]
let smaller=arr2[0]
for(let i=1;i<arr.length;i++){
      if(smaller>arr2[i]){
        smaller=arr2[i]
      }
}
console.log(smaller)

//----------------------------------------------------------

let avg=[2,6,6,8,18]
let sum=0
for(let i=0;i<avg.length;i++){
    sum+=avg[i]
}
sum=sum/array.length

//----------------------------------------------------------

let nu=5
let fec=1
for(let i=1;i<=nu;i++){
    fec*=i
}
console.log(fec)

//----------------------------------------------------------

let n = 10;
let fib = [0, 1];

for (let i = 2; i < n; i++) {
    let next = fib[i - 1] + fib[i - 2];
    if (next > n) break;
    fib.push(next);
}

//----------------------------------------------------------

let h=20
for (let num = 2; num <= h; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(num);
    }
}


//----------------------------------------------------------

let z=5
for(let i=1;i<=10;i++){
    console.log(i+"x"+z+"=" +i*z)
}

//----------------------------------------------------------

let array2D=[[1,2,3],[4,5,6],[7,8,9]]

for(let i=0;i<array2D.length;i++){
    for(let j=0;j<array2D.length;j++){
        console.log(array2D[i][j])
    }
}

//-----------------------------------------------------------

let reverse=[1,2,3,4,5]
for(let i=reverse.length-1;i>=0;i--){
   console.log(reverse[i])
}

//----------------------------------------------------------

let specific=[1,2,3,4,5]
let start=2
let end=4
for (let i = start; i <= end; i++) {
    console.log(array[i]);
}

//---------------------------------------------------------

const steps = [1, 2, 3, 4, 5];
const step = 2;

for (let i = 0; i < steps.length; i += step) {
    console.log(array[i]);
}

//-------------------------------------------------------

const arrayFind = [1, 2, 3, 4, 5];
const numberToFind = 0;
let found = false;

for (let i = 0; i < arrayFind.length; i++) {
    if (array[i] === numberToFind) {
        found = true;
        break;
    }
}

console.log(found);

//-------------------------------------------------------

const arrayCounter = [1, 2, 1, 3, 2, 1];
const numberFind = 3;
let frequency = 0;

for (let i = 0; i < arrayCounter.length; i++) {
    if (arrayCounter[i] === numberFind) {
        frequency++;
    }
}

console.log(frequency);


