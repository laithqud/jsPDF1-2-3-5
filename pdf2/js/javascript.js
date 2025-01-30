function smallest(arr) {
    let small = arr[0]; 
    for (let i = 1; i < arr.length; i++) { 
        if (arr[i] < small) {
            small = arr[i]; 
        }
    }
    return small;
}

console.log(smallest([30, 45, 60, 7])); 

//---------------------------------------------------------------------------

function alpha(strng){
    let word=strng.split("").sort().join()
    return word
}

console.log(alpha("orange"))

//---------------------------------------------------------------------------

function fectorial(num){
    if(num === 0 || num === 1){ return 1 }
    else{
        return num * fectorial(num-1)
    }
}

console.log(fectorial(8))


//---------------------------------------------------------------------------

function oddOReven(num){
    if(num%2==0){
        return 'even'
    }
    else{
        return 'odd'
    }
}

console.log(oddOReven(9))

//----------------------------------------------------------------------------

function evenNumbers(array){
    let x=[]
    for(let i=0;i<array.length;i++){
        if(array[i]%2==0){
            x.push(array[i])
        }
    }
    return x
}

console.log(evenNumbers([1,2,3,4,5,6,7,8]))

//---------------------------------------------------------------------------

function numOnly(arr){
    let numArr=[]
    for(let i=0; i<arr.length;i++){
        if(typeof(arr[i])=='number'){
            numArr.push(arr[i])
        }
    }
    return numArr
}

console.log(numOnly(['Ayham', 3, 7, 'Alaa', 13, 'coding']))

//----------------------------------------------------------------------------

function fectorialSum(num){
    if(num === 0 ){ return 0 }
    else if(num>0){
        return num + fectorialSum(num-1)
    }
    else{
        return num
    }
}

console.log(fectorialSum())

//---------------------------------------------------------------------------

function minMaxLengthAverage(array){
    let finalArray=[]
    let smaler=array[0]
    let larger=array[0]
    let sum=0
    for(let i=1;i<array.length;i++){
        if(array[i]<smaler){
            smaler=array[i]
        }
    }
    finalArray.push(smaler)

    for(let i=1;i<array.length;i++){
        if(array[i]>larger){
            larger=array[i]
        }
    }
    finalArray.push(larger)

    finalArray.push(array.length)

    for(let i=0;i<array.length;i++){
       sum+=array[i]
    }
    sum=sum/array.length

    finalArray.push(sum)

    return finalArray
}

console.log(minMaxLengthAverage(([7, 13, 3, 77, 100])))

//------------------------------------------------------------------------

function romanNumbers(num) {
    const romanNumerals = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1]
    ];
    
    let result = '';
    
    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i][1]) {
            result += romanNumerals[i][0];
            num -= romanNumerals[i][1];
        }
    }
    
    return result;
}

console.log(romanNumbers(1989)); 

//------------------------------------------------------------------------

function countWords(str){
    let words= str.split(" ")
    return words.length
}

console.log(countWords('hello from CodingAcademy!'))

//------------------------------------------------------------------------

function MultiplyByLength(array){

    let arrayLength=array.length
   
    for(let i=0;i<array.length;i++){
        array[i]*=arrayLength
    }
    return array
}

console.log(MultiplyByLength([4,2,5]))

//-------------------------------------------------------------------------

function checkEnding(str1, str2){

    let str1split=str1.split("")
    let str1End=str1split.pop()
    let str2Split=str2.split("")
    
    for(let i=0;i<str2Split.length;i++){
        if(str2Split[i]==str1End){
            return true
        }
    }
    return false
}
console.log(checkEnding("CodingSchool", "Ac"))
//--------------------------------------------------------------------

function doubleChar(str){
    let word=str.split("")
    let repeat=[]
    for(let i=0;i<word.length;i++){
        repeat.push(word[i])
        repeat.push(word[i])
    }
    return repeat.join("")
}
console.log(doubleChar("Coding"))

//-------------------------------------------------------------------------

function findIndex(array,lookFor){
    for(let i=0; i<array.length;i++){
        if(array[i] == lookFor){
            return i+1
        }
    }

}
console.log(findIndex(['Ali', 1, 'Ayham', 'Murad'], "Murad"))

//-------------------------------------------------------------------------

function getAbsSum(arr) {
    let absSum = 0;
    for (let i = 0; i < arr.length; i++) {
        absSum += Math.abs(arr[i]);
    }
    return absSum;
}

console.log(getAbsSum([-1, -3, -5, -4, -10, 0]));

