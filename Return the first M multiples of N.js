function multiples(m, n) {
  x = [];
  var y;

  for (let i = 1; i <= m; i++) {
    var y = n * i;
    console.log(y);
    x.push(y);
  }

  return x;
}
