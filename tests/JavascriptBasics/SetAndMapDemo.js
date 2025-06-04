const demo = new Set();
demo.add(1);
demo.add(2);
demo.add(3);

const demo1 = new Set(["C#","Java","JS"]);
console.log(demo1);

demo1.add("J")
console.log(demo1);

let an = demo1.has('Java');
console.log(an);

for(let m of demo1)
{
    console.log(m);
}

demo1.forEach(function(dem){

    console.log(dem);
    if(dem==="C#1")
    {
        console.log("Language is correct");
    }
    else
    {
        console.log("Language is not correct");
    }

})

const demoMap = new Map();

demoMap.set('USD', 85);
demoMap.set('INR', 1);
demoMap.set('NEP', 3);

console.log(demoMap);

console.log(demoMap.get('USD'));

demoMap.forEach(function(key, value){

    console.log(value);
    console.log(key);
})
