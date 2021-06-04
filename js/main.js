//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  if (min > max || min <0) {
    throw new Error('задан неверный диапазон');}
  min = Math.ceil(min); //округляет число вверх
  max = Math.floor(max); //округляет число вниз
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
console.log(getRandomIntInclusive(5, 1));


//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFloatInclusive(min, max, charactersNumber) {
  if (min > max || min <0) {
    throw new Error('задан неверный диапазон');}
  let randomFloat = Math.random() * (max - min + 1) + min;
  charactersCount = Math.pow(10, charactersNumber);
  randomFloat = Math.floor(randomFloat * charactersCount) / charactersCount;
  return randomFloat;
}
console.log(getRandomFloatInclusive(1.1, 10.1, 3));
