// Type inference
const add = (a: number, b: number) => {
  return a + b;
};

console.log(add(5, 6));

const subtract = (a: number, b: number) => {
  return a - b;
};

console.log(subtract(15, 10));

// Type annotations
const divide = (a: number, b: number): number => {
  return a / b;
};

console.log(divide(15, 10));

const multiply = (a: number, b: number): number => {
  return a * b;
};

console.log(multiply(15, 10));

// void
const logger = (msg: string): void => {
  console.log(msg);
};
logger("Hello World");

// never
const throwError = (msg: string): never => {
  throw new Error(msg);
};

// destructure parameters
const todayWeather = {
  date: new Date(),
  weather: "sunny",
};

const logWeather = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date, weather);
};

logWeather(todayWeather);
