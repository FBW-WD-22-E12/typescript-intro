//! Functions
// this is bad typescript
// function square(num) {
//     return num * num;
// }

// the good version
function square(num: number): number {
  // console.log(num * num)
  return num * num;
}

let squareOfTow = square(2);
console.log(squareOfTow); // 4

let newNum = squareOfTow + 14;
// newNum // 18

//! The Void Type
const greeting = function (name: string): void {
  console.log(`Hello ${name}`);
};

greeting("John");

//! The Never Type
// never is used to say never return anything, it never finishes executing

function throwAnError(message: string): never {
  throw new Error(message);
}

//! default parameters

const greetings2 = (name: string = "Stranger"): void => {
  console.log(`Hello ${name}`);
};

greetings2();
greetings2("Susan");

//! Maps
const colors: string[] = ["Blue", "Green", "Red"];

// change all colors to an array of uppercase colors
const upperCaseColors: string[] = colors.map((color): string =>
  color.toUpperCase()
);
