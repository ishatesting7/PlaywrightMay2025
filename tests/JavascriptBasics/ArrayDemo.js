//Array - Way1
const demoCar = ["Mercedes", "Hyundai","Toyota","BMW"];

//Array - Way2
const demoMobile = [];
demoMobile[0] = "iPhone";
demoMobile[1] = "Samsung - Android";
demoMobile[2] = "Honor - Android";

//Array - Way3
const demoCountry = new Array("India", "Nepal", "Bangladesh");
console.log(demoCountry[0]);

//Array - Way4
// const demoPoint = new Array[3];

// demoPoint[0] = 1;
// demoPoint[1] = 1;
// demoPoint[2] = 1;

demoCountry[0] = 'Sri-Lanka';
console.log(demoCountry[0]);

console.log(demoCountry.toString());

console.log(demoCountry);

const person = {
    firstName:"Demo",
    lastName:"Dem",
    Salary:300
}

console.log(demoCountry.length)
console.log(demoCountry.sort())
let len = demoCountry.length;

for(let i = 0; i<len;i++)
{
    console.log(demoCountry[i]);
}

// demoCountry.forEach({

//     //logic for each element of array
 
// })

demoCountry.push("Australia");

console.log(demoCountry);


let typeDemo = typeof demoCountry;
console.log(typeDemo);

let m = 100;
let typ = typeof m;
console.log(typ);

let str = "New to JS";
let typ1 = typeof str;
console.log(typ1);

demoCountry.forEach(demo1);

function demo1()
{
    console.log("I am in foreach");
}

console.log(demoCountry.reverse());

console.log(demoCountry);

demoCountry.fill("USA",1,2);
console.log(demoCountry);


demoCountry.fill("Newzealand");
console.log(demoCountry);

let ms = demoCountry.pop()
console.log(ms);
console.log(demoCountry);

console.log(demoCountry.join("  asd  "))

console.log(demoCountry);

let demo11 = [1,5,0];
let demo12 = [4,6,5];
let joinedA = demo11.concat(demo12).concat(demo12);

console.log(joinedA)
