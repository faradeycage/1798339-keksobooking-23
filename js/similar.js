
import {getAds} from './data.js';
const info = getAds();

//Выведите заголовок объявления offer.title в заголовок .popup__title.
const template = document.querySelector('#card').content;
const titleTemplate = template.querySelector('.popup__title');
const title = titleTemplate.cloneNode(true);
title.textContent = info[1].offer.title;
//Отрисуйте один из сгенерированных DOM-элементов, например первый, в блок #map-canvas, чтобы проверить, что данные в разметку были вставлены корректно.
const mapCanvas = document.querySelector('.map__canvas');
if (title.textContent === ''){
  title.classList.add('hidden');
}
mapCanvas.appendChild(title);

//Выведите адрес offer.address в блок .popup__text--address.
const addressTextTemplate = template.querySelector('.popup__text--address');
const addressText = addressTextTemplate.cloneNode(true);
addressText.textContent = info[1].offer.address;
if (addressText.textContent === ''){
  addressText.classList.add('hidden');
}
mapCanvas.appendChild(addressText);

//Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
const priceTemplate = template.querySelector('.popup__text--price');
const price = priceTemplate.cloneNode(true);
price.textContent = `${info[1].offer.price  } ₽/ночь`;
if (info[1].offer.price === ''){
  price.classList.add('hidden');
}
mapCanvas.appendChild(price);

/*В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
Квартира для flat
Бунгало для bungalow
Дом для house
Дворец для palace
Отель для hotel
*/
const typeTemplate = template.querySelector('.popup__type');
const type = typeTemplate.cloneNode(true);
let typeInRussian = '';
if (info[1].offer.type === 'palace') {typeInRussian = 'Дворец';}
if (info[1].offer.type === 'flat') {typeInRussian = 'Квартира';}
if (info[1].offer.type === 'house') {typeInRussian = 'Дом';}
if (info[1].offer.type === 'bungalow') {typeInRussian = 'Бунгало';}
if (info[1].offer.type === 'hotel') {typeInRussian = 'Отель';}
type.textContent = typeInRussian;
if (info[1].offer.type === ''){
  type.classList.add('hidden');
}
mapCanvas.appendChild(type);

//Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity
//строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».
const roomsAndGuestsTemplate = template.querySelector('.popup__text--capacity');
const roomsAndGuests = roomsAndGuestsTemplate.cloneNode(true);
roomsAndGuests.textContent = `${info[1].offer.rooms  } комнаты для ${  info[1].offer.guests} гостей`;
if (info[1].offer.rooms === '' && info[1].offer.guests === ''){
  roomsAndGuests.classList.add('hidden');
}
mapCanvas.appendChild(roomsAndGuests);

//Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида
//Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
const checkinAndCheckoutTemplate = template.querySelector('.popup__text--time');
const checkinAndCheckout = checkinAndCheckoutTemplate.cloneNode(true);
checkinAndCheckout.textContent = `Заезд после ${info[1].offer.checkin}, выезд до ${info[1].offer.checkout}`;
if (info[1].offer.checkin === '' && info[1].offer.checkout === ''){
  checkinAndCheckout.classList.add('hidden');
}
mapCanvas.appendChild(checkinAndCheckout);

//В список .popup__features выведите все доступные удобства в объявлении.
const featuresTemplate = template.querySelector('.popup__features');
const features = featuresTemplate.cloneNode(true);
features.textContent = info[1].offer.features;
if (features.textContent === ''){
  features.classList.add('hidden');
}
mapCanvas.appendChild(features);

//В блок .popup__description выведите описание объекта недвижимости offer.description
const descriptionTemplate = template.querySelector('.popup__description');
const description = descriptionTemplate.cloneNode(true);
description.textContent = info[1].offer.description;
if (description.textContent === ''){
  description.classList.add('hidden');
}
mapCanvas.appendChild(description);

//В блок .popup__photos выведите все фотографии из списка offer.photos.
//Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
const photosTemplate = template.querySelector('.popup__photos');
const photos = photosTemplate.cloneNode(false);

for (let i =0; i < info[1].offer.photos.length; i++) {
  const photoTpl = template.querySelector('.popup__photo');
  const photo = photoTpl.cloneNode(true);
  photo.src = info[1].offer.photos[i];
  photos.appendChild(photo);
}
if (photos === ''){
  photos.classList.add('hidden');
}
mapCanvas.appendChild(photos);

//Замените значение атрибута src у аватарки пользователя .popup__avatar
//на значение поля author.avatar.
const avatarTemplate = template.querySelector('.popup__avatar');
const avatar = avatarTemplate.cloneNode(true);
avatar.src = info[1].author.avatar;
if (info[1].author.avatar === ''){
  avatar.classList.add('hidden');
}
mapCanvas.appendChild(avatar);
