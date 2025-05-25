const a = 6; // Change this input to test different cases
const count = a % 2 === 0 ? a - 1 : a;
const result = [];

for (let i = 0; i < count; i++) {
  const num = 2 * i + 1;
  if (result.length < a && num <= count * 2) {
    result.push(num);
  }
}

console.log(result.join(", "));
