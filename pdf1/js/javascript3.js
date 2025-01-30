let word="Welcome to Orange"
console.log(word.toUpperCase())
console.log(word.slice(7,10).toUpperCase())
console.log(word.replace("Welcome to", "Hello from"))
console.log(word.toLowerCase())
console.log(word.length)
console.log(word.replace("Orange", "\"Orange\""))
console.log(word+" Jordan")

/* ---------------------------- Question 2----------------------------------- */

let str="cactus"
let splt=str.split("")
for(let i=1;i<splt.length;i++){
    if(splt[i]==str[0]){
        splt[i]="*"
    }
}
console.log(splt.join(""))
