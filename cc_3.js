// U08282838

// Created car class with a constructor for make(brand) and speed(km/h)
class car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    // Increase car's speed by 10 km/h
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} accelerated 10 km/h. Speed is now ${this.speed} km/h`);
    }

    // Derease car's speed by 5 km/h
    brake(){
        this.speed -= 5;
        console.log(`${this.make} braked to slow down 5 km/h. Speed is now ${this.speed} km/h`);
    }
}

// Test Cars
let car1 = new car("BMW", 120);
let car2 = new car("Mercedes", 95);

// Test Car 1
console.log(`${car1.make} is going ${car1.speed} km/h`);
car1.brake();
car1.brake();
car1.accelerate();
car1.brake();
car1.accelerate();

// Test Car 
console.log(`\n${car2.make} is going ${car2.speed} km/h`);
car2.accelerate();
car2.accelerate();
car2.brake();
car2.brake();
car2.accelerate();