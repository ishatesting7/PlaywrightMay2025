//Object -> It is a collection of properties
let person ={
    firstName: 'Vikas', 
    lastName: 'B', 
    country: 'India'
}
console.log("person.firstName: "+person.firstName) 
console.log("person.lastName: "+person.lastName) 
console.log("person.country: "+person.country)

//Adding the property gender into Javascript Object person 

person.gender='Male'
person.salary=30000
console.log("person.gender: "+person.gender)
console.log("------------------")   

console.log("person.Salary: "+person.salary)

//Deleting the property gender from Javascript Object person 

delete person.gender
console.log("person.firstName: "+person.firstName) 
console.log("person. lastName: "+person.lastName)
console.log("person.country: "+person.country)
console.log("person.gender: "+person.gender)