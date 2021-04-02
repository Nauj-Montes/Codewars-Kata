function scoreMatrix(matrix) {
  let score = 0;
  let x = 0;

  for (let j = 0; j < matrix[0].length; j++) {
    for (let i = 0; i < matrix.length; i++) {
      x = (-1) ** (i + j) * matrix[i][j];
      score += x;
    }
  }
  return score;
}
