
const dataV = {

    "name":"demo",
    "age":23,
    "hobby":{
        "sport":"cricket",
        "gaming":true,
        "reading":false
    },
    "language":[
        "Javascript",
        "PHP",
        "ROR",
        "Scala"
    ]

}

console.log(dataV.language[0]);
console.log(dataV.hobby.reading);

console.log(dataV["age"]);

const Value = '{"name":"john","age":30}';

// const objV = JSON.parse(Value);
// console.log(objV);

const objVV = JSON.parse(dataV);
console.log(objVV);



const strJSON = JSON.stringify(dataV)
console.log(strJSON);

console.log(typeof strJSON);

let boo = strJSON.includes('name')
console.log(boo);
//res = JSON.stingify

//API 1 - Access Token - Get the Token Response

//API 2 - Create an order - POST - Bearer <Access Token> - 200/201