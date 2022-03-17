const carMakers = ["Ford", "BMW", "Audi"];

const dates = [new Date(), new Date()];

const carsByMake = [["f150"], ["M6"], ["Charger"]];

const arryOfArry: string[][] = [];

// Help with infernces when extracting values
const car = carMakers[1];

const myCar = carMakers.pop();

// prevent incompatible values
carMakers.push(65);

// Help with map

const cars = carMakers.map((car: string): string => {
  return car.toUpperCase();
});
console.log(cars);

const dates1 = [new Date(), "2021-3-26"];

const dates2: (string | Date)[] = [];
dates2.push("2021-3-26");
