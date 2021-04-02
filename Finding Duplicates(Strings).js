/* eslint-disable */
let sample = [
  ["a", "a", "b", "b"],
  ["a", "a", "b", "b"],
  ["b", "a", "a", "b"],
  ["a", "b", "a", "b"],
  ["a", "b", "a", "b"],
  ["b", "a", "a", "b"],
  ["b", "a", "a", "b"],
  ["a", "b", "a", "b"],
  ["a", "b", "a", "b"],
  ["b", "a", "a", "b"],
  ["a", "a", "b", "b"],
  ["a", "a", "b", "b"],
  ["a", "b", "b", "a"],
  ["b", "a", "b", "a"],
  ["b", "a", "b", "a"],
  ["a", "b", "b", "a"],
  ["b", "b", "a", "a"],
  ["b", "b", "a", "a"],
  ["b", "b", "a", "a"],
  ["b", "b", "a", "a"],
  ["a", "b", "b", "a"],
  ["b", "a", "b", "a"],
  ["b", "a", "b", "a"],
  ["a", "b", "b", "a"],
];

const verifyDuplicates = (arr) => {
  let sample_string = arr.join(" ");
  let sample_copy = sample_string.split(" ");
  let convertedOutput = [];
  let output = [];

  for (let i = 0; i < sample_copy.length - 1; i++) {
    let valueToCompare = sample_copy[i];
    for (let e = 1; e < sample_copy.length - 1; e++) {
      if (valueToCompare.toString() === sample_copy[e].toString()) {
        if (output.indexOf(valueToCompare) === -1) {
          output.push(valueToCompare);
          break;
        } else {
          break;
        }
      }
    }
  }
  for (let i = 0; i < output.length - 1; i++) {
    convertedOutput.push(output[i].split(","));
  }
  return convertedOutput;
};
console.log(verifyDuplicates(sample));
