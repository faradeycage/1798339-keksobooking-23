
import {getRandomIntInclusive, getRandomFloatInclusive, getRandomItem} from './utils.js';

const SIMILAR_ADS_COUNT = 10;

const MIN_LNG = 139.70000;
const MAX_LNG = 139.80000;
const MIN_LNT = 35.65000;
const MAX_LNT = 35.70000;

const MAX_ROOMS_COUNT = 10;

const MAX_GUESTS_COUNT = 10;

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

const getUniqueFeatures = () => {
  const featuresArrayLength = getRandomIntInclusive(1, FEATURES.length);
  const featuresGenerated = new Array(featuresArrayLength);
  for (let idx = 0; idx < featuresArrayLength; idx++) {
    const randomFeaturesIndex = getRandomIntInclusive(0, FEATURES.length - 1);
    featuresGenerated[idx] = FEATURES[randomFeaturesIndex];
  }

  const featuresUnique = [];

  for (let idx = 0; idx < featuresArrayLength; idx++) {
    if (!featuresUnique.includes(featuresGenerated[idx])) {
      featuresUnique.push(featuresGenerated[idx]);
    }
  }
  return featuresUnique;
};

const getPhotos = () => {
  const photosArrayLength = getRandomIntInclusive(1, 10);
  const photosGenerated = new Array(photosArrayLength);
  for (let idx = 0; idx < photosArrayLength; idx++) {
    const randomPhotosIndex = getRandomIntInclusive(0, PHOTOS.length - 1);
    photosGenerated[idx] = PHOTOS[randomPhotosIndex];
  }
  return photosGenerated;
};

const getAvatar = () => {
  let userAvatarCount = getRandomIntInclusive(1, 10);
  if (userAvatarCount < 10) {
    userAvatarCount = `0${userAvatarCount}`;
  }
  return `img/avatars/user${userAvatarCount}.png`;
};

const getLocation = () => ({
  lat: getRandomFloatInclusive(MIN_LNT, MAX_LNT, 5),
  lng: getRandomFloatInclusive(MIN_LNG, MAX_LNG, 5),
});

const getOffer = (location) => ({
  title: getRandomItem(TITLES),
  address: `${location.lat}, ${location.lng}`,
  price: getRandomIntInclusive(1000, 100000),
  type: getRandomItem(APPARTS_TYPE),
  rooms: getRandomIntInclusive(1, MAX_ROOMS_COUNT),
  guests: getRandomIntInclusive(1, MAX_GUESTS_COUNT),
  checkin: getRandomItem(CHECK_IN_OUT_TIMES),
  checkout: getRandomItem(CHECK_IN_OUT_TIMES),
  features: getUniqueFeatures(),
  description: getRandomItem(DESCRIPTIONS),
  photos: getPhotos(),
});

const createSimilarAd = () => {
  const location = getLocation();
  return {
    author: {
      avatar: getAvatar(),
    },
    location: location,
    offer: getOffer(location),
  };
};

const getAds = () => new Array(SIMILAR_ADS_COUNT).fill(null).map(() => createSimilarAd());

export {getAds};
