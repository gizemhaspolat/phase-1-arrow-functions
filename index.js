const divide = (x, y) => {
  if (x > y) {
    return x / y;
  } else {
    return y / x;
  }
};
const square = (param1) => param1 * param1;
const add = (param1, param2) => param1 + param2;

let division = divide(100, 2000);
console.log(division);
