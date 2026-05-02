const activation = (x: number): number => {
  const alpha = 1.6732632423543772;
  const scale = 1.0507009873554805;
  return x > 0 ? scale * x : scale * alpha * (Math.exp(x) - 1);
};
export { activation };
