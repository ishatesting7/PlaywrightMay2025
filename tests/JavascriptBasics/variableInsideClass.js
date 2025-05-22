class demoForVariable
{
    //Public 
    role = "User";
    roleAdmin = "Admin";

    //Static
    static userLevel = 0;

    //Private 
    #username;
    #password;

    constructor(name, email, password)
    {
        this.name = name;
        this.email = email;
        this.#password  = password;
        // setTimeout(() => {
        //     console.log('Waiting')
        // }, 2000);
        // setInterval(() => {
            
        // }, 2000);
        this.#username = `UserDetails - ${Date.now()}`;
      
        demoForVariable.userLevel++;
    }

    username()
    {
        return this.#username;
    }

    displayInfo()
    {
        console.log(`Name - ${this.name}`, `
        Email - ${this.email}`, `Role - ${this.role}`);
    }

    validatePasswordInformation(input)
    {
        return this.#password === input;
    }

    static userLevelCount()
    {
        return this.userLevel;
    }

    
}

const ui1 = new demoForVariable("John","john@demo.com","secure123");
const ui2 = new demoForVariable("Doe","doe@demo.com","sec123");
const ui3 = new demoForVariable("Ram","ram@demo.com","test123");
ui1.displayInfo();
ui2.displayInfo();
ui3.displayInfo();
console.log(demoForVariable.userLevelCount()); //3
console.log(ui1.username());
console.log(ui2.username());
console.log(ui3.username());
console.log(ui1.validatePasswordInformation('secure123'));
console.log(ui2.validatePasswordInformation('sec123'));
