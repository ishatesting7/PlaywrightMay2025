//Specific to setInterval

// const { time } = require("console");

let count = 0;
function demoSetInterval(username, password)
{

    console.log("I am being call in every");
    console.log(username);
    console.log(password);

   

    //Access Token - 300 Seconds
    //Call the above function after every 250 seconds and get the new access token


}

let user = "demo";

setInterval(demoSetInterval, 1000, user, 123);

let demoCount = 0;

let intervalValue = setInterval(function(){

    demoCount+=1;

    if(demoCount ===5)
    {
        clearInterval(intervalValue)
    }

    let currentDate = new Date();
    let timeValue = currentDate.toLocaleTimeString();
    console.log(timeValue);
},3000);