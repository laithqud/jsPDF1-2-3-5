let obj1={name:"Adam", age:25,gender:"male"}
console.log(obj1.name + " "+obj1.age + " "+obj1.gender)

//----------------------------------------------------------


let obj2={name:"John", age:25}
obj2.gender="male"
console.log(obj2.name + " "+obj2.age + " "+obj2.gender)

//----------------------------------------------------------

let obj3={name:"Sara",age:21}
obj3['gender']="female"
console.log(obj3.gender)

//----------------------------------------------------------

let obj4={name:"mohd", age:26,gender:"male"}
console.log(obj4.name)

//----------------------------------------------------------

let obj5={name:"amal",age:22,gender:"female"}
console.log(obj5['name'])

//---------------------------------------------------------

let obj6={name: "Adam", age: 25, gender: "male"}
let keys=Object.keys(obj6)

for(let i=0;i<keys.length;i++){
    console.log(keys[i]+": "+ obj6[keys[i]])
}

//---------------------------------------------------------

let obj7={ name: "salim", age: 25, gender: "male" }
console.log(Object.keys(obj7))

//----------------------------------------------------------

let obj8={ name: "saja", age: 25, gender: "female" };
console.log(Object.values(obj8))

//----------------------------------------------------------

let obj9={ name: "majed", age: 20, gender: "male" };
console.log(Object.entries(obj9))

//----------------------------------------------------------

let obj10_1={ name: "Adam", age: 25 }, obj10_2= { gender: "male" }
console.log(Object.assign(obj10_1,obj10_2))

//----------------------------------------------------------

let obj11 = { name: "salem", age: 28, gender: "male" }
Object.freeze(obj11)

obj11.age = 30  
obj11.gender = "female"

console.log(obj11) 

//-----------------------------------------------------------

let obj12 = { name: "John", age: 32, occupation: "engineer" }
Object.seal(obj12)

obj12.age = 35
obj12.city = "Amman"   
delete obj12.occupation   

console.log(obj12)  
