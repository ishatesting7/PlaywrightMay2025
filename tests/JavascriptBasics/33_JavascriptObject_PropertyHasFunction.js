//Object -> It is a collection of properties
let person ={
firstName: 'Vikas', 
lastName: 'B',
country: 'India',
salary:300,

fullName:function()
{
return (this.firstName+" "+this.lastName)
},

demo1:function()
{

    return(this.salary);
}
}

console.log("person.fullName()): "+person.fullName())
console.log(person.demo1());

demo();
demo();
demo();
demo();

//In JAVASCRIPT  - 
function demo()
{
console.log("I am in Demo");
}

//ONE MORE WAY FOR FUNCTION CREATION
const demo121 = new Function("x", "y","return x*y");

let m = demo121(3,5);
console.log(m);

demo();
//console.log(demo());

//SELF INVOKING - 
(function (){

    let m = "DEMO FUN";  //It is invoking
    console.log(m);
})();
//===========

(function (dummy, dummy1){

    let m = "DEMO FUN in PARAMETER";  //It is invoking
    console.log(m);
    console.log(`${dummy}`,`${dummy1}`);

})("Hello", "I am new to JS");


let flag = (function(demo, demo1, salary){

    return `${demo}, ${demo1} I am new to JS ${salary}`;
    /*
    function(userRole, status)
    {
        if(userRole.textContent()==='ESS')
        {
            status.selectOption('Disabled')
        }
        else
        {
            status.selectOption('Enabled')

        }
    }



    */


})("Ram", "Working",32994)


console.log(flag)