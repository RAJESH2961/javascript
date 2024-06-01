class Animal{
    eat(){
        console.log(`the ${this.name} is eating`);
    }
    sleep(){
        console.log(`the ${this.name} is sleeping`);
    }
    died(){
        console.log(`the ${this.name} is died`);
    }
}

//creating an Inheritance
class fish extends Animal{
    name = "fish"
}
class rabbit extends Animal{
    name = "rabbit"
}
class dog extends Animal{
    name = "dog"
}
//creating an object
const fish1 = new fish();
fish1.eat();

const rab = new rabbit();
rab.died();