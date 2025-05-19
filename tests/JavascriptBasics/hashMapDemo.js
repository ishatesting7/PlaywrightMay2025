const demoMap = new Map();

demoMap.set("Name","Raj");

demoMap.set("Salary",25000);

demoMap.set("Department","IT");

console.log(demoMap.size);

console.log(demoMap.get("Department"));

for(let [key, value] of demoMap)
{
    console.log(`Key - ${key} ==> Value ==> ${value}`);
}

const hashTableDemo = {};

hashTableDemo['username']='secret_sauce';
hashTableDemo['password']='secret';

console.log(hashTableDemo['password']);
