//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random

function getRandomIntInclusive(min, max) {
  if (min > max || min < 0) {
    throw new Error('задан неверный диапазон');
  }
  min = Math.ceil(min); //округляет число вверх
  max = Math.floor(max); //округляет число вниз
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
getRandomIntInclusive(0,10);

//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFloatInclusive(min, max, precision) {
  if (min > max || min < 0) {
    throw new Error('задан неверный диапазон');
  }
  const randomFloat = Math.random() * (max - min + 1) + min;
  const multiplier = Math.pow(10, precision);
  return Math.floor(randomFloat * multiplier) / multiplier;
}
getRandomFloatInclusive(0, 10, 3);
