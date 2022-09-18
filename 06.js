function sumPairs(numbers, result) {
  for (const [index, value] of numbers.entries()) {
    const auxArray = [...numbers];
    auxArray.splice(index, 1);
    const number = auxArray.find((item) => item + value === result);
    if (number) return [value, number];
  }
  return null;
}

const res = sumPairs([0, 2, 2, 3, -1, 1, 5], 6);
console.log(res);
