// ======================================================
// 📚 JAVASCRIPT ARROW FUNCTIONS — FULL DETAILED LECTURE
// ======================================================

// 🧩 1. Introduction
// Arrow functions were introduced in ES6 (2015).
// They provide a shorter syntax to write functions.
// Syntax: const functionName = (parameters) => expression;

console.log("===== 1. BASIC EXAMPLES =====");

// Example 1 — Traditional vs Arrow
function traditional() {
  console.log("Hello from traditional function!");
}
traditional();

// Arrow version
const arrow = () => console.log("Hello from arrow function!");
arrow();

// Example 2 — Single parameter (no need for parentheses)
const square = n => n * n;
console.log("Square of 5:", square(5));

// Example 3 — Multiple parameters
const add = (a, b) => a + b;
console.log("Add(3, 7):", add(3, 7));

// Example 4 — Returning an object (use parentheses)
const createUser = (name, age) => ({ name, age });
console.log("User:", createUser("Ali", 22));

// Example 5 — Implicit return
const greet = name => `Hello, ${name}!`;
console.log(greet("Anjum"));

// Example 6 — Default parameter
const power = (base, exp = 2) => base ** exp;
console.log("Power(3,4):", power(3, 4));
console.log("Square(5):", power(5));

// Example 7 — Conditional inside arrow
const checkEven = num => num % 2 === 0 ? "Even" : "Odd";
console.log("5 is:", checkEven(5));


// ⚙️ 2. Intermediate Usage
console.log("\n===== 2. INTERMEDIATE USAGE =====");

// Example 8 — Arrow in array methods
const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(n => n * n);
console.log("Squares:", squares);

// Example 9 — Filtering
const evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

// Example 10 — Reducing
const sum = numbers.reduce((acc, val) => acc + val, 0);
console.log("Sum:", sum);

// Example 11 — Arrow in setTimeout
setTimeout(() => console.log("Executed after 2 seconds ⏱️"), 2000);

// Example 12 — Arrow returning a function
const multiplier = m => n => n * m;
const double = multiplier(2);
console.log("Double(10):", double(10));

// Example 13 — Arrow inside object (note “this” behavior)
const person = {
  name: "Saira",
  normalFunc: function() {
    console.log("Normal:", this.name);
  },
  arrowFunc: () => {
    console.log("Arrow:", this.name); // undefined (arrow functions don’t bind their own this)
  }
};
person.normalFunc();
person.arrowFunc();


// 🧱 3. Data Structures with Arrow Functions
console.log("\n===== 3. DATA STRUCTURE EXAMPLES =====");

// Example 14 — Arrays and map/filter/reduce
const arr = [10, 20, 30, 40, 50];
const result = arr.filter(x => x > 25).map(x => x / 10);
console.log("Result:", result);

// Example 15 — Objects
const student = { name: "Akhtar", marks: 88, city: "Skardu" };
Object.entries(student).forEach(([key, value]) => console.log(${key}: ${value}));

// Example 16 — Map
const users = new Map();
users.set(1, "Ali");
users.set(2, "Anjum");
users.forEach((v, k) => console.log(ID: ${k}, Name: ${v}));

// Example 17 — Set
const set = new Set([1, 2, 2, 3, 4]);
set.forEach(v => console.log("Set Value:", v));

// Example 18 — Frequency Counter
const words = ["js", "python", "js", "c++"];
const freq = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log("Frequency:", freq);

// Example 19 — Sorting objects with arrow
const items = [
  { name: "Book", price: 100 },
  { name: "Pen", price: 20 },
  { name: "Bag", price: 300 },
];
items.sort((a, b) => a.price - b.price);
console.log("Sorted Items:", items);


// 🧠 4. Advanced Concepts
console.log("\n===== 4. ADVANCED CONCEPTS =====");

// Example 20 — Currying
const addThree = a => b => c => a + b + c;
console.log("Curried Add:", addThree(2)(3)(4));

// Example 21 — Composition
const compose = (f, g) => x => f(g(x));
const addOne = x => x + 1;
const doubleNum = x => x * 2;
const combined = compose(doubleNum, addOne);
console.log("Compose(5):", combined(5));

// Example 22 — Arrow + Promises
const promise = new Promise((resolve, reject) => {
  let success = true;
  success ? resolve("Promise Resolved ✅") : reject("Promise Failed ❌");
});
promise.then(msg => console.log(msg)).catch(err => console.log(err));

// Example 23 — Arrow + Async/Await
const fetchData = async () => "Fetched Data Successfully 📦";
fetchData().then(res => console.log(res));

// Example 24 — Closures
const counter = (() => {
  let count = 0;
  return {
    inc: () => ++count,
    dec: () => --count
  };
})();
console.log("Counter++:", counter.inc());
console.log("Counter--:", counter.dec());

// Example 25 — Factorial recursion
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
console.log("Factorial(5):", factorial(5));

// Example 26 — Matrix Sum
const matrixSum = mat => mat.flat().reduce((a, b) => a + b);
console.log("Matrix Sum:", matrixSum([[1, 2], [3, 4]]));

// Example 27 — Unique values from array
const unique = arr => [...new Set(arr)];
console.log("Unique:", unique([1, 1, 2, 3, 3, 4]));

// Example 28 — Arrow with optional chaining
const getCity = user => user?.address?.city || "Unknown";
console.log("City:", getCity({ address: { city: "Skardu" } }));

// Example 29 — Arrow with destructuring and default
const displayUser = ({ name = "Unknown", age = 0 }) => ${name} (${age});
console.log(displayUser({ name: "Ali", age: 25 }));
console.log(displayUser({}));

// Example 30 — Chaining methods
const chain = arr => arr.filter(x => x > 2).map(x => x * 2).reduce((a, b) => a + b);
console.log("Chained Result:", chain([1, 2, 3, 4, 5]));


// 🔬 5. Deep Understanding of “this”
console.log("\n===== 5. UNDERSTANDING 'this' =====");

// In normal functions, “this” refers to the caller object.
// In arrow functions, “this” is inherited from the parent scope.

const obj = {
  name: "Anjum",
  normal: function() {
    console.log("Normal this:", this.name);
  },
  arrow: () => console.log("Arrow this:", this.name)
};
obj.normal(); // ✅ Works
obj.arrow();  // ❌ Undefined


// 💻 6. Practice Questions (40+ Mini Examples)
console.log("\n===== 6. PRACTICE QUESTIONS =====");

const multiply = (a, b) => a * b;
const subtract = (a, b) => a - b;
const divide = (a, b) => b !== 0 ? a / b : "Division by zero";
const isPositive = n => n > 0;
const toUpper = str => str.toUpperCase();
const sumArray = arr => arr.reduce((a, b) => a + b, 0);
const findMax = arr => Math.max(...arr);
const countVowels = str => str.match(/[aeiou]/gi)?.length || 0;
const reverse = str => str.split("").reverse().join("");
const factorial2 = n => n <= 1 ? 1 : n * factorial2(n - 1);

console.log("Multiply:", multiply(3, 4));
console.log("Subtract:", subtract(10, 3));
console.log("Divide:", divide(8, 2));
console.log("Is Positive:", isPositive(-5));
console.log("Uppercase:", toUpper("arrow"));
console.log("Sum Array:", sumArray([1, 2, 3, 4]));
console.log("Max:", findMax([3, 7, 2]));
console.log("Vowels:", countVowels("JavaScript"));
console.log("Reverse:", reverse("Arrow"));
console.log("Factorial:", factorial2(6));


// ✅ Summary
console.log(`
====================================================
🎯 SUMMARY:
- Shorter syntax using => 
- Implicit returns save time
- No own 'this' or 'arguments'
- Great for callbacks and short logic
- Avoid for object methods needing 'this'
====================================================
`);
// JavaScript Arrow Functions — Detailed Professional Guide
// Author: Muhammad Ali Anjum
// Arrow functions were introduced in ES6 (2015) as a cleaner,
// more modern way to write functions. They are concise,
// automatically bind this lexically, and encourage functional programming.

// Example 1: Basic arrow function (no parameters)
const sayHello = () => console.log("👋 Hello, Developer!");
sayHello();
// Logical note: Parentheses are required even if there are no parameters.

// Example 2: Arrow function with one parameter
const square = num => num * num;
console.log("Square:", square(5));
// Logical note: When there's a single argument, parentheses are optional.

// Example 3: Multiple parameters
const add = (a, b) => a + b;
console.log("Sum:", add(10, 15));
// Logical note: Multiple parameters always require parentheses.

// Example 4: Explicit vs implicit return
const multiply = (a, b) => a * b; // implicit return
const divide = (a, b) => { return a / b; }; // explicit return
console.log("Multiply:", multiply(4, 6), "Divide:", divide(12, 3));
// Logical note: Curly braces {} turn the body into a block; use return explicitly.

// Example 5: Returning an object
const makeUser = (name, age) => ({ name, age });
console.log(makeUser("Ali", 22));
// Logical note: Parentheses are required around object literals to avoid ambiguity.

// Example 6: Arrow functions in array methods (map, filter, reduce)
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const total = numbers.reduce((acc, n) => acc + n, 0);
console.log("Doubled:", doubled, "Evens:", evens, "Total:", total);
// Logical note: Arrow functions are ideal for concise callback syntax.

// Example 7: Working with objects and data arrays
const students = [
  { name: "Ali", marks: 85 },
  { name: "Saira", marks: 92 },
  { name: "Akhtar", marks: 78 },
];
const topStudents = students.filter(s => s.marks > 80);
const studentNames = students.map(s => s.name);
console.log("Top Students:", topStudents);
console.log("Names:", studentNames);
// Logical note: Arrow functions simplify logic-heavy array operations.

// Example 8: Behavior of this in arrow functions
const person = {
  name: "Anjum",
  greet: () => console.log(Hello ${this.name}), // ❌ this not bound
  properGreet() { console.log(Hello ${this.name}); } // ✅ works fine
};
person.greet();
person.properGreet();
// Logical note: Arrow functions inherit this from the outer lexical scope,
// making them unsuitable for methods that rely on their own this.

// Example 9: Higher-order function using arrow functions
const operate = (a, b, operation) => operation(a, b);
console.log("Add:", operate(5, 3, (x, y) => x + y));
console.log("Multiply:", operate(5, 3, (x, y) => x * y));
// Logical note: Arrow functions can be passed as arguments to create flexible logic.

// Example 10: setTimeout with arrow function
setTimeout(() => console.log("⏳ Executes after delay"), 1000);
// Logical note: Arrow functions prevent issues with this inside callbacks.

// Example 11: Using arrow functions with Promises
const fetchData = () => new Promise(resolve => {
  setTimeout(() => resolve("✅ Data fetched successfully"), 1000);
});
fetchData().then(msg => console.log(msg));
// Logical note: Perfect for async callbacks and cleaner promise chains.

// Example 12: Using arrow functions with Map and Set
const userMap = new Map([["name", "Ali"], ["role", "Developer"]]);
userMap.forEach((value, key) => console.log(${key}: ${value}));
const idSet = new Set([101, 102, 103]);
idSet.forEach(id => console.log("User ID:", id));
// Logical note: Arrow functions keep iteration simple and expressive.

// Example 13: Nested arrow functions (currying)
const addThree = x => y => z => x + y + z;
console.log("Curried Sum:", addThree(2)(3)(4));
// Logical note: Currying allows partial application of arguments, enhancing reusability.

// Example 14: Sorting arrays using arrow function
const data = [5, 1, 8, 3];
data.sort((a, b) => a - b);
console.log("Sorted:", data);
// Logical note: Compact comparison logic for sorting.

// Example 15: Default parameters in arrow functions
const greetUser = (name = "Guest") => console.log(Welcome, ${name}!);
greetUser("Saira");
greetUser();
// Logical note: Defaults simplify function calls and prevent undefined values.

// Example 16: Destructuring parameters
const showDetails = ({ name, age }) => console.log(${name} is ${age} years old);
showDetails({ name: "Akhtar", age: 23 });
// Logical note: Cleanly extract properties within the parameter list.

// Example 17: Searching arrays
const findStudent = name => students.find(s => s.name === name);
console.log("Found:", findStudent("Saira"));
// Logical note: Short-circuit search logic with concise syntax.

// Example 18: Error handling
const safeDivide = (a, b) => {
  if (b === 0) throw new Error("Division by zero not allowed");
  return a / b;
};
try {
  console.log(safeDivide(10, 2));
  console.log(safeDivide(10, 0));
} catch (e) {
  console.error("Error:", e.message);
}
// Logical note: Error logic can coexist naturally with arrow functions.

// Example 19: Real-world data processing
const employees = [
  { name: "Ali", salary: 50000 },
  { name: "Saira", salary: 65000 },
  { name: "Akhtar", salary: 80000 },
];
const highEarners = employees
  .filter(e => e.salary > 60000)
  .map(e => e.name.toUpperCase());
console.log("High Earners:", highEarners);
// Logical note: A real-world demonstration of arrow functions with chained operations.

// Example 20: Combining multiple arrow function concepts
const pipeline = value => ({
  double: () => pipeline(value * 2),
  increment: () => pipeline(value + 1),
  get: () => value
});
const result = pipeline(5).double().increment().double().get();
console.log("Pipeline Result:", result);
// Logical note: Demonstrates immutability and method chaining using arrows.

// Example 21: Async arrow with try/catch
const asyncTask = async () => {
  try {
    const response = await fetchData();
    console.log("Async:", response);
  } catch (error) {
    console.error("Error:", error.message);
  }
};
asyncTask();
// Logical note: Async/await works naturally with arrow functions.

// Example 22: Using arrow function with class callbacks
class Button {
  constructor(label) {
    this.label = label;
  }
  click() {
    setTimeout(() => console.log(Button '${this.label}' clicked!), 1000);
  }
}
const btn = new Button("Submit");
btn.click();
// Logical note: Using arrow ensures this inside callback still refers to the class instance.

// Example 23: Logical performance note
// Arrow functions are lightweight and ideal for inline logic,
// but for complex, reusable blocks, use traditional functions for readability.

// Example 24: Advanced usage — composition
const compose = (f, g) => x => f(g(x));
const add2 = x => x + 2;
const times3 = x => x * 3;
const add2ThenTimes3 = compose(times3, add2);
console.log("Compose Result:", add2ThenTimes3(4)); // (4 + 2) * 3 = 18
// Logical note: Arrow functions make function composition elegant and expressive.

// Example 25: Final thought
// Arrow functions are the foundation of modern JavaScript style.
// They encourage concise syntax, better readability, and functional programming habits.
// However, be aware of their this binding and avoid them in dynamic method contexts.
function sum(a,b){
    return a+b;
}
console.log(the sum of two number: ${sum(2,4)});


function inf(...a){
return a+=a;
}
console.log(the sum of two number: ${inf(2,4,4,7,8,99,3)});

let arr =[1,4,5,7,4,3,46,7,7]
let copy={...arr};
console.log(copy);


let arrowf=(a ,b)=> a+b;
let arrowb=(a ,b)=>{
    return a+b;
}
console.log("the sum of a number: ${arrowf(2,4)}");
console.log("the sum of b number: ${arrowb(2,4)}");