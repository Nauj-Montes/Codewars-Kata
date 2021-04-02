function solution(number) {
  let total = 0;

  for (let i = 0; i < number; i++) {
    if (Number.isInteger(i / 3)) {
      total += i;
    } else if (Number.isInteger(i / 5)) {
      total += i;
    }
  }
  return total;
}
