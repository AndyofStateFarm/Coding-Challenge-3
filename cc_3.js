// U08282838

// Created car class with a constructor for make(brand) and speed(km/h)
class car{
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    // Accelerate car's speed by 10 km/h
    accelerate(){
        this.speed += 10;
        console.log(`${this.make} accelerated 10 km/h. Speed is now ${this.speed} km/h`);
    }
}