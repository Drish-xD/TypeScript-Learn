const drink = {
  color: "red",
  carbonated: true,
  suger: 50,
};

// array
const pepsi = ["red", true, 50];

// tuple
const pepsi1: [string, boolean, number] = ["red", true, 50];

type Drink = [string, boolean, number];

const sprite: Drink = ["red", true, 50];

const tea: Drink = ["brown", false, 20];
