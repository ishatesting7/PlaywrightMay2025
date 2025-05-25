//Object -> It is a collection of properties
let person ={
firstName: 'Vikas', 
lastName: 'B',
country: 'India',

fullName:function()
{
return (this.firstName+" "+this.lastName)
}
}

console.log("person.fullName()): "+person.fullName())