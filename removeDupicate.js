const friends = [
  "Emon",
  "Rimon",
  "Shakil",
  "Bellal",
  "Farabi",
  "Rimon",
  "Arman",
  "Bellal",
  "Naiem",
  "Abdullah",
  "Shakil",
];

const numbers = [2, 3, 2, 1, 4, 5, 7, 4, 3, 5];

function removeDuplicate(arr) {
  const unique = [];
  for (const item of arr) {
    if (unique.includes(item) === false) {
      unique.push(item);
    }
  }
  return unique;
}

const uniqueArray = removeDuplicate(friends);
const uniqueNumber = removeDuplicate(numbers);
console.log(uniqueArray);
console.log(uniqueNumber);
