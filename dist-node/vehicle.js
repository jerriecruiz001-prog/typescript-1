"use strict";
// Step 2: Implement the Car class
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    start() {
        console.log("Car engine started");
    }
}
// Step 3: Create an instance of Car
const myCar = new Car("Toyota", "Corolla", 2022);
// Step 4: Call the start method
myCar.start();
