// Log numbers from 1 to 100 that are divisible by 5
for (let i = 1; i <= 100; i++) {
  if (i % 5 == 0) {
    console.log(i);
  }
}

// A nested for loop to print “I’m the outer loop” 3 times and “I’m the inner loop” within the inner loop.
for (let i = 1; i <= 3; i++) {
  console.log("I'm the outer loop", i);
  for (let j = 1; j <= 3; j++) {
    console.log("\tI'm the inner loop", j);
  }
}
