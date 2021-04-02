function seven(m) {
  const x = [];
  const y = [];
  const z = [];

  for (let i = 0; i < (m).toString().length - 2; i++) {
    if (x.length == 0) {
      x.push(parseInt(m / 10));
      y.push(m % 10);
      z.push(x[i] - (2 * y[i]));
    } else {
      x.push(parseInt(z[i - 1] / 10));
      y.push(z[i - 1] % 10);
      z.push(x[i] - (2 * y[i]));
    }
  }
  if (z.length == 0) {
    return [0, 0];
  }
  return [z[z.length - 1], (m).toString().length - 2];
}
