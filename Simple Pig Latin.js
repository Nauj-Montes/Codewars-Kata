function pigIt(str) {
  const x = str.split(" ");
  let output = "";

  for (let i = 0; i < x.length; i++) {
    if (output === "") {
      output += `${x[i].substring(1) + x[i].charAt(0)}ay`;
    } else if (x[i].length > 1) {
      output += ` ${x[i].substring(1)}${x[i].charAt(0)}ay`;
    } else if (x[i] === "!" || x[i] === "?") {
      output += ` ${x[i]}`;
    } else {
      output += ` ${x[i]}ay`;
    }
  }
  return output;
}
const pig_Latin = pigIt("Pig latin is cool");
console.log(pig_Latin);
