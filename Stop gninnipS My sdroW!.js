function spinWords(str) {
  const arr = str.split(/(\s+)/);
  let output = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < 5) {
      output += arr[i];
    } else {
      for (let y = arr[i].length - 1; y >= 0; y--) {
        output += arr[i].charAt(y);
      }
    }
  }
  return output;
}

const x = spinWords("Just kidding there is still one more");
if (x === "Just gniddik ereht is llits one more") {
  console.log(x);
}
