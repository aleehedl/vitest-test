export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

export function getNumberAndDoSomething() {
  const number = getRandomInt(1, 500);
  return number;
}
