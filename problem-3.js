function checkDigitsInName(name) {
  if (typeof name === "string") {
    const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let result = false;
    for (const digit of digits) {
      // console.log(digit);
      if (name.includes(digit)) {
        result = true;
      }
    }
    if (result === true) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Invalid Input";
  }
}

console.log(checkDigitsInName("Raj123"));
console.log(checkDigitsInName("Simon"));
console.log(checkDigitsInName(["Name2024"]));
console.log(checkDigitsInName(50));
console.log(checkDigitsInName("!@#"));
