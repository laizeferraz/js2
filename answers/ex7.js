// Declare and initialise an array with 5 names and ages
let students = [
  [201, "Mary", 40],
  [202, "Barbara", 31],
  [203, "David", 22],
  [204, "Alex", 35],
  [205, "Sue", 24],
];

console.log(students.toString());

// log length of the array
console.log(students.length);

// log the last element
console.log(students[students.length - 1]);

// add john to array
students.push(206, "John", 45);
console.log(students.toString());

// remove the first item from the array
let removedStudent = students.shift();
console.log(students.toString());
console.log(removedStudent);
