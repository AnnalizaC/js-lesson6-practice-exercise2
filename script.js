var multiply = function (num1, num2) {
  if (typeof num1 !== "number") {
    return "Please enter a number";
  } else if (typeof num2 !== "number") {
    return "Please enter a number";
  }

  return num1 * num2;
};

console.log(multiply(5, 5));
console.log(multiply("test", 5));
console.log(multiply(5, "number"));
console.log(multiply(15, 25));
console.log(multiply(25, 35));
