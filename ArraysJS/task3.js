const NumArray = [10, 20, 30, 40, 50];

const initialValue = 0;
const sumWithInitial = NumArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);