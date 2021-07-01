const OFFER_TYPES = {
  palace: 'Дворец',
  flat: 'Квартира',
  bungalow: 'Бунгало',
  hotel: 'Отель',
  house: 'Дом',
};

const createAdPopup = (info) => {
  const template = document.querySelector('#card').content.cloneNode(true);

  //Выведите заголовок объявления offer.title в заголовок .popup__title.
  const popupTitle = template.querySelector('.popup__title');
  popupTitle.textContent = info.offer.title;
  //Отрисуйте один из сгенерированных DOM-элементов, например первый, в блок #map-canvas, чтобы проверить, что данные в разметку были вставлены корректно.
  if (popupTitle.textContent === '') {
    popupTitle.classList.add('hidden');
  }

  //Выведите адрес offer.address в блок .popup__text--address.
  const popupTextAddress = template.querySelector('.popup__text--address');
  popupTextAddress.textContent = info.offer.address;
  if (popupTextAddress.textContent === '') {
    popupTextAddress.classList.add('hidden');
  }

  //Выведите цену offer.price в блок .popup__text--price строкой вида {{offer.price}} ₽/ночь. Например, «5200 ₽/ночь».
  const popupTextPrice = template.querySelector('.popup__text--price');
  popupTextPrice.textContent = `${info.offer.price  } ₽/ночь`;
  if (info.offer.price === '') {
    popupTextPrice.classList.add('hidden');
  }

  /*В блок .popup__type выведите тип жилья offer.type, сопоставив с подписями:
  Квартира для flat
  Бунгало для bungalow
  Дом для house
  Дворец для palace
  Отель для hotel
  */
  const popupType = template.querySelector('.popup__type');


  const typeInRussian = OFFER_TYPES[info.offer.type];

  popupType.textContent = typeInRussian;
  if (info.offer.type === '') {
    popupType.classList.add('hidden');
  }

  //Выведите количество гостей и комнат offer.rooms и offer.guests в блок .popup__text--capacity
  //строкой вида {{offer.rooms}} комнаты для {{offer.guests}} гостей. Например, «2 комнаты для 3 гостей».
  const popupTextCapacity = template.querySelector('.popup__text--capacity');
  popupTextCapacity.textContent = `${info.offer.rooms  } комнаты для ${  info.offer.guests} гостей`;
  if (info.offer.rooms === '' && info.offer.guests === '') {
    popupTextCapacity.classList.add('hidden');
  }

  //Время заезда и выезда offer.checkin и offer.checkout в блок .popup__text--time строкой вида
  //Заезд после {{offer.checkin}}, выезд до {{offer.checkout}}. Например, «Заезд после 14:00, выезд до 14:00».
  const popupTextTime = template.querySelector('.popup__text--time');
  popupTextTime.textContent = `Заезд после ${info.offer.checkin}, выезд до ${info.offer.checkout}`;
  if (info.offer.checkin === '' && info.offer.checkout === '') {
    popupTextTime.classList.add('hidden');
  }

  //В список .popup__features выведите все доступные удобства в объявлении.
  const popupFeatures = template.querySelector('.popup__features');
  popupFeatures.innerHTML = '';
  for (let idx =0; idx <  info.offer.features.length; idx++){
    const popupFeature = document.createElement('li');
    popupFeature.classList.add('popup__feature', `popup__feature--${info.offer.features[idx]}`);
    popupFeatures.appendChild(popupFeature);
  }
  if (info.offer.features.length < 1) {
    popupFeatures.classList.add('hidden');
  }

  //В блок .popup__description выведите описание объекта недвижимости offer.description
  const popupDescription = template.querySelector('.popup__description');
  popupDescription.textContent = info.offer.description;
  if (popupDescription.textContent === '') {
    popupDescription.classList.add('hidden');
  }

  //В блок .popup__photos выведите все фотографии из списка offer.photos.
  //Каждая из строк массива photos должна записываться как атрибут src соответствующего изображения.
  const popupPhotos = template.querySelector('.popup__photos');
  const popupPhoto = template.querySelector('.popup__photo');
  popupPhotos.innerHTML = '';

  if (info.offer.photos.length > 0) {
    for (let idx = 0; idx < info.offer.photos.length; idx++) {
      const photo = popupPhoto.cloneNode(true);
      photo.src = info.offer.photos[idx];
      popupPhotos.appendChild(photo);
    }
  } else {
    popupPhotos.classList.add('hidden');
  }

  //Замените значение атрибута src у аватарки пользователя .popup__avatar
  //на значение поля author.avatar.
  const popupAvatar = template.querySelector('.popup__avatar');
  popupAvatar.src = info.author.avatar;
  if (info.author.avatar === '') {
    popupAvatar.classList.add('hidden');
  }

  return template;

};
export {
  createAdPopup
};
