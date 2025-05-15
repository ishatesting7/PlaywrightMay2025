/*

let
var
const

*/
//var

//Function Scope
//It can redeclared again and update the value

function varDemo()
{
    var m;

    console.log(m)
    var str = "I am new to Javascript";

    if(true)
    {
        console.log(m)
        var m = 400;
        m = 300;
        console.log(m)
        var bool = true;
    }
    console.log(m);
    console.log(bool);
}
var bool = false;
varDemo();
console.log(bool);
console.log("================LET Logic============");

//LET
//BLOCK SCOPE
//Redeclare

function letDemo()
{
    let n = 300;
    console.log(n)

    if(true)
    {
        let n = 500;
        console.log(n)
        n = 299;
        console.log(n)
    }
    console.log(n)
}

letDemo();


//CONST
//BLOCK SCOPE
console.log("================Constant Logic============");

const pi = 3.14;

function constDemo()
{
    console.log(pi)

    if(true)
    {
        const pi = 4;
        console.log(pi)
    }


    console.log(pi)

}

constDemo();