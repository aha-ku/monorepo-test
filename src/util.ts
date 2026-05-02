function add(a: number, b: number): number {
  return a + b;
}
function subtract(a: number, b: number): number {
  return a - b;
}
function multiply(a: number, b: number): number {
  return a * b;
}
function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error("除数不能为零");
  }
  return a / b;
}
function square(a: number): number {
  return a * a;
}
function cube(a: number): number {
  return a * a * a;
}
function power(a: number, b: number): number {
  return Math.pow(a, b);
}
function factorial(n: number): number {
  if (n < 0) {
    throw new Error("输入必须是非负整数");
  }
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
export { add, subtract, multiply, divide, square, cube, power, factorial };
