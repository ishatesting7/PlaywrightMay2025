
//For 
for(let i = 0; i < 5; i++)
{
    console.log('Number Value - '+ i);
}


//while loop

let i = 0;
while(i<5){
    console.log('Number in while loop - '+ i)
    i++;
}

//do While loop


let j = 0;

do{
    console.log("Number in Do While - "+ j)
    j++;
}while(j<5);

let programmingLanguage = ["java", "rubyonrail","c# .net","c++","c","golang"];
for(let pl of programmingLanguage)
{
    console.log(" Language - "+ pl)
}


//Data in form on JSON - 
let dataOfPerson = {
    name:"Ram",
    Age:20,
    Department:"IT",
    Salary:20000,
    isAvailable:true
}

for(let keyDemo in dataOfPerson)
{
    console.log(keyDemo  + " : " + dataOfPerson[keyDemo])
}