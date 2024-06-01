class CalculateAge {
    constructor(name, birthyear) {
        this.name = name;
        this.birthyear = birthyear;
    }
    getAge() {
        const presentYear = new Date().getFullYear(); // Use getFullYear() to get the year
        return presentYear - this.birthyear;
    }
    displayAge() {
        console.log(`Your Name is ${this.name}`);
        console.log(`Your Age is ${this.getAge()} `);
    }
}

let person1 = new CalculateAge("Rajesh", 2001);
person1.displayAge();
