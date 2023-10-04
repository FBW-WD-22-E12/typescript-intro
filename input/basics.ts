//* Typescript

// allows to write javascript with type safety
// get intellisense
// building get transformed into typescript (compiled)

// TypeScript is a superset of JavaScript. It means that TypeScript provides all the features and functionalities of JavaScript with some additional features. TypeScript compiles to JavaScript, which the browser understands. TypeScript provides "type safety" to Javascript. It was created by Microsoft and is open source.

//! Type Annotation
let myString: string = "Hello world";

myString = "Good morning";
// myString = 23; // THROW AN ERROR

let myNumber: number = 23;
let myBool: boolean = true;

myString.toUpperCase();
// myNumber.toUpperCase(); // throws an error
// myString++; // throws an error

//! Type Inference
// Type inference refers to the automatic detection of the type of an expressions in a formal language
let str2 = "Whats going on!";
// str2++; // is set to a string therefore will throw an error

//! any type -> don't use this
let thing: any = 20;
thing = true;
thing = 99;

// any is hardly used because it defeats the point of typescript

let undefinedVariable: string;
