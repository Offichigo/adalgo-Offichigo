/*
This function should return the result
of an addition,
subtraction,
multiplication, or
division

depending on the operator provided.

For example:

const x = 2
const y = 3
const operator = '+'

calculator(x, y, operator) => return 5
*/
export const calculator = (x, y, operator) => {
  if (typeof x !== "number" || typeof y !== "number" || isNaN(x) || isNaN(y)) {
    return "is empty";
  }
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    return x / y;
  } else {
    return "no operators";
  }
};
