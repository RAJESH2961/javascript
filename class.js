// es-6 feacture
class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    //we no need to use function keyword
    DisplayProduct(){
        console.log(`Product Name : ${this.name}`);
        console.log(` Price : ${this.price}`);
    }

    finalRate(tax){
        return this.price * tax;

    }
}

const tax = 0.05;

const pro1 = new Product("T-shirts", 500)
pro1.DisplayProduct();
console.log(pro1.finalRate(tax));

class age{
    constructor(name, year){
        this.name =name;
        this.year = year;
    }
    ageNow(){
        const date = new Date();
        return date.getFullYear() - this.year
    }
}
const age1 = new age("Rajesh", 2001);
console.log(age1.ageNow());