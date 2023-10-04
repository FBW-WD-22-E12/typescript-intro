//! Arrays
// string[]
// []

const myStringArray: string[] = ["hello", "world"];
// const myStringArray2: string[] = ["hello", "world", 17]; // error because only string allowed

myStringArray.push("Ohla");
// myStringArray.push(true); // error

// ! Union Types

let myAge: number | string = 29;
myAge = "29";

// let daysOfTheWeek: number[] | string[] = ["Mon", "Tue", 3, 4, 5]; // error not numbers array and not just strings array
let daysOfTheWeek: (string | number)[] = ["Mon", "Tue", 3, 4, 5, 6, 7];

// seperated arrays in arrays

let daysOfTheWeekSeperatedByType: (string | number)[][] = [
  ["Mon", "Tue", "Wed"],
  [4, 5],
];

//! Tuples

// tuples is an array with fixed types
// they are fixed in the lengths and in their types

const rgbColors: [number, number, number] = [255, 0, 255];

const httpResponse: [number, string] = [200, "Ok"];

//* NOTE: we can't change elements however array methods (push, pop... ) work
// This is a limitation of tuples in how they were created
httpResponse.push("Hello"); // this is fine
console.log(httpResponse);
httpResponse.pop();
httpResponse.pop(); // also fine
console.log(httpResponse);
httpResponse.unshift("Hello");
console.log(httpResponse);
httpResponse.shift(); // this is fine
console.log(httpResponse);

httpResponse.splice(0, 1, 3); // "hello also works"
console.log(httpResponse);
