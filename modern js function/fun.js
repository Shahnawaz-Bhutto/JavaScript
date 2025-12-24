✅ Modern JavaScript Functions (ES6+) ⚡🧠

//Mastering these function features will make your code cleaner, shorter, and more expressive!

//1. Arrow Functions
//Shorter syntax for writing functions.
//js
// Traditional
function add(a, b) {
  return a + b;
}

// Arrow
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5


//2. Default Parameters
//Set default values for function arguments.
//js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}
greet(); // Hello, Guest


//3. Rest Parameters
//Capture multiple arguments into an array.
//js
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log(sum(1, 2, 3)); // 6


//4. Spread Operator in Functions
//Expand arrays into individual arguments.
//js
const nums = [1, 2, 3];
console.log(Math.max(...nums)); // 3


//5. Named vs Anonymous Functions
//Anonymous functions don’t have a name; useful in callbacks.
//js
setTimeout(function () {
  console.log("Anonymous function");
}, 1000);

const sayHi = function greet() {
  console.log("Named function");
};


//6. Immediately Invoked Function Expression (IIFE)
//Runs as soon as it’s defined.
//js
(function () {
  console.log("IIFE executed!");
})(); // Output: IIFE executed!


//7. Function Expressions vs Declarations
//Function declarations are hoisted; expressions are not.
//js
// Declaration
function sayHello() {
  console.log("Hello");
}

// Expression
const sayBye = function () {
  console.log("Bye");
};


//8. Callback Functions
//Functions passed as arguments to be executed later.
//js
function processUserInput(callback) {
  const name = "Alice";
  callback(name);
}
processUserInput(name => console.log(`Hi, ${name}`));


//9. Function Chaining
//Call multiple methods in a single line.
//js
const result = [1, 2, 3]
.map(x => x * 2)
.filter(x => x> 2)
.reduce((a, b) => a + b);
console.log(result); // 10


//10. Async Functions
//Use async and await for cleaner asynchronous code.
//js
async function fetchData() {
  return "Data loaded";
}
fetchData().then(console.log); // Data loaded