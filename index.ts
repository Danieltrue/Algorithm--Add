const add = (a: number, b: number): number => a + b;

console.log(add(4, 5)); // 9

const add2 = (data: number[]): number => {
  let total = 0;

  data.forEach((num) => (total += num));

  return total;
};

console.log(add2([2, 5, 6, 7])); // 20
