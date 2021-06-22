//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
export function getRandomFloatInclusive(min, max, charactersNumber) {
  if (min > max || min < 0) {
    throw new Error('задан неверный диапазон');
  }
  let randomFloat = Math.random() * (max - min + 1) + min;
  const charactersCount = Math.pow(10, charactersNumber);
  randomFloat = Math.floor(randomFloat * charactersCount) / charactersCount;
  return randomFloat;
}

//Функция, возвращающая случайное целое число из переданного диапазона включительно.
//источник https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomIntInclusive(min, max) {
  if (min > max || min < 0) {
    throw new Error('задан неверный диапазон');
  }
  min = Math.ceil(min); //округляет число вверх
  max = Math.floor(max); //округляет число вниз
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}
