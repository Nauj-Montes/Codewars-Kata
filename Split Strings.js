function solution(str) {
  const x = str.split("");
  const output = [];

  if (str.length % 2 === 0) {
    for (let i = 0; i < str.length - 1; i++) {
      if (i % 2 === 0) {
        output.push(x[i] + x[i + 1]);
      }
    }
  } else {
    for (let i = 0; i < x.length - 2; i++) {
      if (i % 2 === 0) {
        output.push(x[i] + x[i + 1]);
      }
    }
    output.push(`${x[x.length - 1]}_`);
  }
  return output;
}

const string = solution("abcdef");
console.log(string);
