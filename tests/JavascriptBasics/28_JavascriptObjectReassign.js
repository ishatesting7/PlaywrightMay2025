//Object -> It is a collection of properties
let person ={
firstName: 'Vikas', 
lastName: 'B', 
country: 'India'
}
console.log("person.firstName: "+person.firstName) 
console.log("person.lastName: "+person.lastName) 
console.log("person.country: "+person.country)

person.firstName='Sandeep'
person.lastName='B'
person.country='India'

console.log("person.firstName: "+person.firstName) 
console.log("person.lastName: "+person.lastName) 
console.log("person.country: "+person.country)

console.log("person[firstName]: "+person['firstName']) 
console.log("person [lastName]: "+person['lastName']) 
console.log("person [country]: "+person['country'])