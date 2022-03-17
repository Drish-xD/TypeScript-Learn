// ******************** //
//   Type Annotations   //
// ******************** //

// Declare type of variable by user

// number
const num: number = 6;

// string
const hello: string = "Hello";

// boolean
const hasName: boolean = true;

// null
const nullValue: null = null;

// undefined
const nothing: undefined = undefined;

// buildin objects
const now: Date = new Date();

// Array
const colors: string[] = ["red", "yellow"];

const myNums: number[] = [1, 2, 3];

const truth: boolean[] = [true, false, false];

// classes
class Car {}

const car: Car = new Car();

// object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// functions
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// ******************** //
//    Type Inference    //
// ******************** //

// Deteacts types of variable automatically

const num2 = 5;

// When To Use Type Annotations
// 1) Function that returns the 'any' type

const json = '{ "x": 10, "y": 20 }';
const coordinates = JSON.parse(json);
console.log(coordinates);

// 2) When we decleare a variable in one line and init it later

const colors2 = ["red", "green", "blue"];
let foundWord: boolean = false;

for (let i = 0; i < colors2.length; i++) {
  if (colors2[i] === "blue") {
    foundWord = true;
  }
  console.log(foundWord);
}

// 3) Variable whose type cannot be inferred correctly

let numbers = [-1 - 5, 8];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
  console.log(numberAboveZero);
}
