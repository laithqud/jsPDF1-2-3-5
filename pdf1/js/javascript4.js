var arr= ["Coding", "Academy", "By", "Orange"]

arr.push("Jordan"); console.log(arr) //Output: [“Coding”, “Academy”, “By”, “Orange”, “Jordan”]
arr.splice(2); console.log(arr) //Output: [“Coding”, “Academy”] 
arr.unshift("Welcome","To"); arr.push("By", "Orange"); console.log(arr)  // Output: [“Welcome”, “To”, “Coding”, “Academy”, “By”, “Orange”]  
arr.splice(0,3); console.log(arr) // Output: [“Academy”, “By”, “Orange”]   
arr.unshift("Coding"); console.log(arr.join(" ")); // Output: "Coding Academy By Orange"  
console.log(arr); //Output: [“Coding”, “Academy”, “By”, “Orange”] 
arr.splice(1,2); console.log(arr); //Output: [“Coding”, “Orange”] 