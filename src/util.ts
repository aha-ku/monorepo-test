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
export { add, subtract, multiply, divide, square, cube, power };
