interface Vehicle {
  name: string;
  model: number;
  broken: boolean;
  summary(): string;
}

interface Summary {
  summary(): string;
}

const oldCivic = {
  name: "Civic",
  model: 2002,
  broken: false,
  summary(): string {
    return "My Car";
  },
};

const drink = {
  name: "Pepsi",
  carbonated: true,
  suger: 50,
  summary(): string {
    return `My Drink has ${this.suger}gm of suger. `;
  },
};

const printVehicle = (vehicle: Vehicle): void => {
  console.log(`Name: ${vehicle.name}`);
  console.log(`Model: ${vehicle.model}`);
  console.log(`Broken: ${vehicle.broken}`);
  console.log(`summary: ${vehicle.summary()}`);
};

const printSummary = (item: Summary): void => {
  console.log(`summary: ${item.summary()}`);
};

printVehicle(oldCivic);

printSummary(oldCivic);
printSummary(drink);
