class BankAccountNumber
{
    #demo = 300; // Private Variable
    #str = "I am new to Javascript";
    #bool = true;
    constructor(demo)
    {
        this.demo = demo;
        console.log(`I am in parameter constructor ${demo} `);

    }

    // constructor()
    // {
    //     console.log("I am in default constructor");
    // }

    accountBalance(amount)
    {
        if(amount>5000)
        {
            console.log("Minimum amount is maintainted")
        }
        else 
        {
            console.log("Minimum amount is not maintainted")
        }
    }

    #getDemoValue()
    {
        console.log('Private Function');
    }

    getBalance()
    {
        this.#getDemoValue();
        return this.#demo;
    } 
    
}

const acc = new BankAccountNumber("Demo1 Value");
const acc1 = new BankAccountNumber("Demo2 Value");
acc.accountBalance(10000);
acc1.accountBalance(4000);
console.log(acc.getBalance());


