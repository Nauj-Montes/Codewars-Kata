function validParentheses(parens) {
  let x = 0;

  for (let i = 0; i < parens.length; i++) {
    if (parens.charAt(i) === "(") {
      x += 1;
    } else {
      x -= 1;
    }
    if (x < 0) {
      console.log(x);
      return false;
    }
  }
  if (x === 0) {
    return true;
  }
  return false;
}
