//1. Create a function that takes an array of numbers and returns a new array where each number is squared. Use map method.

let arr1 = [2, 4, 6, 8, 10];
const squareNumber = (arr1) => arr1.map((arr1) => arr1 ** 2);
console.log(squareNumber(arr1));

//2. Write a function that takes an array of objects with name and age properties. Filter out only the users whose age is greater than 18.

const arr2 = [
  { firstName: "Qartas", age: 18 },
  { firstName: "Mohsin", age: 29 },
  { firstName: "Hussain", age: 31 },
  { firstName: "Hussan", age: 34 },
];

const filterAge = (arr2) => arr2.filter((person) => person.age > 18);
console.log(filterAge(arr2));

//3. Given an array of products with price, use reduce to calculate the total price of all products.

const arr3 = [
  { product: "soap", price: 200 },
  { product: "shampoo", price: 500 },
  { product: "conditional", price: 700 },
  { product: "serum", price: 599 },
  { product: "comb", price: 299 },
  { product: "perfume", price: 400 },
];
const getTotalPrice = (arr3) =>
  arr3.reduce((total, product) => total + product.price, 0);
console.log(getTotalPrice(arr3));

//4. Create an array of students with marks. Sort the array in descending order based on marks.

const arr4 = [
  { name: "Tulaib", marks: 87 },
  { name: "Noman", marks: 58 },
  { name: "Arham", marks: 48 },
  { name: "Rayan", marks: 64 },
  { name: "Hamza", marks: 78 },
  { name: "Kashif", marks: 95 },
];

const marks = arr4.sort((a, b) => b.marks - a.marks);
console.log(marks);

//5. Write a function that takes an array of strings and finds the first string with length greater than 5 using find method.

const arrayOfStrings = (string) => string.find((fruit) => fruit.length > 5);
console.log(arrayOfStrings(["apple", "banana", "kiwi"]));

//6. Create an object named person with properties firstName, lastName and a method fullName that returns the full name using this keyword. Explain how this works in this context.

const person = {
  firstName: "Qartas",
  lastName: "Mehmood",

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
console.log(person.fullName());

//7. What will be the output of this code and why? Create an example to show the difference between regular function and arrow function when using this inside an object.

const userinfo = {
  name: "Qartas",

  regularFunction: function () {
    console.log(`Hello, my name is ${this.name}`);
  },

  arrowFunction: () => {
    console.log(`Hello, my name is ${this.name}`);
  },
};

userinfo.regularFunction();
userinfo.arrowFunction();

//8. Write a function that takes an array of numbers, filters even numbers, then doubles them using map, and finally returns the sum of those doubled numbers using reduce. Do it in a chain.

const chainNumber = (arr) =>
  arr
    .filter((num) => num % 2 === 0)
    .map((num) => num * 2)
    .reduce((sum, num) => sum + num, 0);
console.log(chainNumber([1, 2, 3, 4, 5, 6, 7, 8]));

/*9. Create an array of employees with name, department and salary. Write code to:
 a) Find an employee who works in HR department
 b) Sort employees by salary in ascending order */

const employees = [
  { name: "Atif", department: "HR", salary: 50000 },
  { name: "Sara", department: "Engineering", salary: 75000 },
  { name: "Bilal", department: "Marketing", salary: 60000 },
  { name: "Ayesha", department: "HR", salary: 55000 },
  { name: "Usman", department: "Finance", salary: 65000 },
];
const findHrEmployee = (list) => list.find((emp) => emp.department === "HR");
console.log(findHrEmployee(employees));
const order = (pay) => pay.sort((a, b) => a.salary - b.salary);
console.log(order(employees));

//10. Create a function that takes an object and returns an array of its keys and values separately, then create a new object from an array of key-value pairs. Use Object.keys, Object.values, and Object.fromEntries.

const user = { name: "Qartas", age: 18, city: "Karachi" };
const values = Object.values(user);
const keys = Object.keys(user);
console.log(values);
console.log(keys);

const pairs = [
  ["name", "Qartas"],
  ["age", 18],
  ["city", "Karachi"],
];
console.log(Object.fromEntries(pairs));
