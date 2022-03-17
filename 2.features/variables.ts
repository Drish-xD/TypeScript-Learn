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
