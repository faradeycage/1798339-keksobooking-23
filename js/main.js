//Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно
function getRandomFloatInclusive(min, max, charactersNumber) {
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
function getRandomIntInclusive(min, max) {
  if (min > max || min < 0) {
    throw new Error('задан неверный диапазон');
  }
  min = Math.ceil(min); //округляет число вверх
  max = Math.floor(max); //округляет число вниз
  return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

/* привет. для всех вот таких вещей
const randomApartTypeIndex = getRandomIntInclusive(0, APART_TYPE.length - 1);
APART_TYPE[randomApartTypeIndex]
создай функцию, которая будет получать один случайны элемент из массива и работать как
const getRandomItem = (items) => items[getRandomIntInclusive(0, items.length - 1)];
и вызывай её как getRandomItem(APART_TYPE), getRandomItem(FEATURES) и т.д.
ещё несколько мелких замечаний оставил */

const getRandomItem = (items) => items[getRandomIntInclusive(0, items.length - 1)];

const TITLES = [
  'Заголовок 1',
  'Заголовок 2',
  'Заголовок 3',
  'Заголовок 4',
  'Заголовок 5',
  'Заголовок 6',
  'Заголовок 7',
  'Заголовок 8',
  'Заголовок 9',
  'Заголовок 10',
];

const APPARTS_TYPE = ['palace', 'flat', 'house', 'bungalow', 'hotel'];

const CHECK_IN_OUT_TIMES = ['12:00', '13:00', '14:00'];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const DESCRIPTIONS = [
  'Описание 1',
  'Описание 2',
  'Описание 3',
  'Описание 4',
  'Описание 5',
  'Описание 6',
  'Описание 7',
  'Описание 8',
  'Описание 9',
  'Описание 10',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const createSimilarAd = () => {
  let userAvatarCount = getRandomIntInclusive(1, 10);
  if (userAvatarCount < 10) {
    userAvatarCount = `0${userAvatarCount}`;
  }
  //title, строка — заголовок предложения. Придумайте самостоятельно.
  const randomTitleIndex = getRandomItem(TITLES);

  //price, число — стоимость. Случайное целое положительное число.
  const randomPrice = getRandomIntInclusive(1000, 100000);

  //type, строка — одно из пяти фиксированных значений: palace, flat, house, bungalow или hotel.
  const randomApartTypeIndex = getRandomItem(APPARTS_TYPE);

  //address, строка — адрес предложения.
  //Для простоты пусть пока составляется из географических координат по маске {{location.lat}}, {{location.lng}}.
  //location, объект — местоположение в виде географических координат. Состоит из двух полей:
  //lat, число с плавающей точкой — широта, случайное значение от 35.65000 до 35.70000.
  //lng, число с плавающей точкой — долгота, случайное значение от 139.70000 до 139.80000.
  const MIN_LNG = 139.70000;
  const MAX_LNG = 139.80000;
  const MIN_LNT = 35.65000;
  const MAX_LNT = 35.70000;

  const latitude = getRandomFloatInclusive(MIN_LNT, MAX_LNT, 5);
  const longitude = getRandomFloatInclusive(MIN_LNG, MAX_LNG, 5);

  //rooms, число — количество комнат. Случайное целое положительное число.
  const MAX_ROOMS_COUNT = 10;
  const roomsCount = getRandomIntInclusive(1, MAX_ROOMS_COUNT);

  //guests, число — количество гостей, которое можно разместить. Случайное целое положительное число.
  const MAX_GUESTS_COUNT = 10;
  const guestsCount = getRandomIntInclusive(1, MAX_GUESTS_COUNT);

  //checkin, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  //checkout, строка — одно из трёх фиксированных значений: 12:00, 13:00 или 14:00.
  const randomCheckInIndex = getRandomIntInclusive(0, CHECK_IN_OUT_TIMES.length - 1);
  const randomCheckOutIndex = getRandomIntInclusive(0, CHECK_IN_OUT_TIMES.length - 1);

  //features, массив строк — массив случайной длины из значений: wifi, dishwasher, parking, washer, elevator, conditioner.
  //Значения не должны повторяться.
  const featuresArrayLength = getRandomIntInclusive(1, FEATURES.length);
  const featuresGenerated = new Array(featuresArrayLength);
  for (let idx = 0; idx < featuresArrayLength; idx++) {
    const randomFeaturesIndex = getRandomIntInclusive(0, FEATURES.length - 1);
    featuresGenerated[idx] = FEATURES[randomFeaturesIndex];
  }

  function unique() {
    const featuresUnique = [];

    for (let idx = 0; idx < featuresArrayLength; idx++) {
      if (!featuresUnique.includes(featuresGenerated[idx])) {
        featuresUnique.push(featuresGenerated[idx]);
      }
    }
    return featuresUnique;
  }

  //description, строка — описание помещения. Придумайте самостоятельно.
  const randomDescriptionIndex = getRandomIntInclusive(1, DESCRIPTIONS.length - 1);

  //photos, массив строк — массив случайной длины из значений: https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg, https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg.
  const photosArrayLength = getRandomIntInclusive(1, 10);
  const photosGenerated = new Array(photosArrayLength);
  for (let idx = 0; idx < photosArrayLength; idx++) {
    const randomPhotosIndex = getRandomIntInclusive(0, PHOTOS.length - 1);
    photosGenerated[idx] = PHOTOS[randomPhotosIndex];
  }

  return {
    author: {
      avatar: `img/avatars/${userAvatarCount}.png`,
    },

    offer: {
      title: getRandomItem(TITLES),
      address: `${latitude}, ${longitude}`,
      price: randomPrice,
      type: getRandomItem(APPARTS_TYPE),
      rooms: roomsCount,
      guests: guestsCount,
      checkin: getRandomItem(CHECK_IN_OUT_TIMES),
      checkout: getRandomItem(CHECK_IN_OUT_TIMES),
      features: unique(),
      description: getRandomItem(DESCRIPTIONS),
      photos: photosGenerated,
    },

    location: {
      lat: latitude,
      lng: longitude,
    },

  };
};

const SIMILAR_AD_COUNT = 10;
// eslint-disable-next-line no-unused-vars
const similarAds = new Array(SIMILAR_AD_COUNT).fill(null).map(() => createSimilarAd());

console.log(JSON.stringify(similarAds));
