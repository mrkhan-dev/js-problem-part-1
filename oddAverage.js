function oddAverage(numbers) {
  const odds = [];
  for (const number of numbers) {
    if (number % 2 === 1) {
      odds.push(number);
    }
  }
  let sum = 0;
  for (const number of odds) {
    sum += number;
  }
  const count = odds.length;
  const avg = sum / count;
  return avg;
}

const numbers = [10, 15, 60, 87, 41, 36, 97];
const avg = oddAverage(numbers);
console.log(avg);
