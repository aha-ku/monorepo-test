const activation = (x: number): number => {
  const alpha = 1.6732632423543772;
  const scale = 1.0507009873554805;
  return x > 0 ? scale * x : scale * alpha * (Math.exp(x) - 1);
};
function sigmoid(x: number): number {
  return 1 / (1 + Math.exp(-x));
}
function derivative(x: number): number {
  const s = sigmoid(x);
  return s * (1 - s);
}
export { activation, sigmoid, derivative };
