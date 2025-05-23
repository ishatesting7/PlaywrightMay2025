function demoAsyn()
{
    console.log("I am in demoAsync");
}

setTimeout(demoAsyn,4000);

console.log("This is the first message");

var demoValue = setTimeout(demoAsyn, 3000);

console.log('Interval ID - ', demoValue);

let currentDateAndTime = new Date();

console.log('currentDateAndTime',currentDateAndTime)

let timeValue = currentDateAndTime.toLocaleTimeString();

let currentDay = currentDateAndTime.getDay();

let currentDate = currentDateAndTime.getDate();

let currentDateDemo = currentDateAndTime.toDateString();

console.log("Demo Date in String", currentDateDemo);

console.log('Day Value', currentDate);

console.log('Day Value', currentDay);

console.log("Time value", timeValue);

let demoCount = 0;

function demoCountValueDemo()
{
    demoCount+=1; //demoCount = demoCount+1;
    console.log(demoCount);
}

let idValue = setTimeout(demoCountValueDemo,5000);

clearTimeout(idValue);

console.log("Set Timeout is Stopped");