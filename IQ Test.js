function iqTest(numbers) {
  const n = numbers.split(" ");
  const pos_even = [];
  const pos_odd = [];

  for (let i = 0; i < n.length; i++) {
    if (Number(n[i]) % 2 == 0) {
      pos_even.push(i + 1);
    } else {
      pos_odd.push(i + 1);
    }
  }
  if (pos_even.length < pos_odd.length) {
    return parseInt(pos_even);
  }
  return parseInt(pos_odd);
}
