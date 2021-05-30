const inputArr1 = [8, 4, 2, 3, 5];
const inputArr2 = [33, 4, 12, 8, 7, 9];
let mutualElements = [];

for (let i = 0; i < inputArr1.length; i++) {
  for (let j = 0; j < inputArr2.length; j++) {
    if (inputArr1[i] === inputArr2[j]) {
      mutualElements.push(inputArr1[i]);
    }
  }
}

console.log(mutualElements);
