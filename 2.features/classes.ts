class Vehicle {
  constructor(public color: string) {}
  public car(): void {
    console.log("BMW");
  }

  protected honk(): void {
    console.log("Beep beep");
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("Vroom Vroom ");
  }
  startDriving(): void {
    this.drive();
    this.honk();
  }
}

const vehicle = new Vehicle("Red");
vehicle.car();
console.log(vehicle.color);

const car = new Car(6, "yellow");
car.startDriving();
console.log(car.color);
