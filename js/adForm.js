const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const ALLOWED_GUESTS_FOR_ROOMS = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1', '2', '3'],
  '100': ['0'],
};

const adFormValidate = () => {
  const adTitleInput = document.querySelector('#title');
  adTitleInput.addEventListener('input', () => {
    const valueLength = adTitleInput.value.length;
    if (valueLength < MIN_TITLE_LENGTH) {
      adTitleInput.setCustomValidity(`Ещё ${  MIN_TITLE_LENGTH - valueLength } симв.`);
    } else if (valueLength > MAX_TITLE_LENGTH) {
      adTitleInput.setCustomValidity(`Удалите лишние ${  valueLength - MAX_TITLE_LENGTH } симв.`);
    } else {
      adTitleInput.setCustomValidity('');
    }
    adTitleInput.reportValidity();
  });

  const adPriceInput = document.querySelector('#price');
  adPriceInput.addEventListener('input', () => {
    const value = adPriceInput.value;
    if (value > MAX_PRICE) {
      adPriceInput.setCustomValidity(`Максимальная цена ${ MAX_PRICE }`);
    } else {
      adPriceInput.setCustomValidity('');
    }
    adPriceInput.reportValidity();
  });

  const roomNumber = document.querySelector('#room_number');
  const capacity = document.querySelector('#capacity');

  const onRoomNumberChange = () => {
    const allowedGuests = ALLOWED_GUESTS_FOR_ROOMS[roomNumber.value];
    for (const option of capacity.children) {
      option.disabled = !allowedGuests.includes(option.value);
    }

    if (!allowedGuests.includes(capacity.value)) {
      capacity.value = allowedGuests[0];
    }
  };

  roomNumber.addEventListener('change', onRoomNumberChange);
  roomNumber.dispatchEvent(new Event('change'));
};

//Реализуйте с помощью JavaScript (удобнее функцией!) перевод страницы в неактивное состояние. Все пункты, кроме первого про карту.

const formPageDisable = () => {
  //Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
  const adForm = document.querySelector('.ad-form');
  adForm.classList.add('ad-form--disabled');
  //Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
  document.querySelector('#title').disabled = true;
  const adFormElements =  Array.from(document.querySelectorAll('.ad-form__element'));
  for (const element of adFormElements){
    element.disabled = true;
  }

  //Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled;
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.add('map__filters--disabled');

  const mapFilterElements = Array.from(document.querySelectorAll('.map__filter'));
  for (const element of mapFilterElements){
    element.disabled = true;
  }

  document.querySelector('#housing-features').disabled = true;
};

const formPageActivate = () => {
  //Форма заполнения информации об объявлении .ad-form содержит класс ad-form--disabled;
  const adForm = document.querySelector('.ad-form');
  adForm.classList.remove('ad-form--disabled');
  //Все интерактивные элементы формы .ad-form должны быть заблокированы с помощью атрибута disabled, добавленного на них или на их родительские блоки fieldset;
  document.querySelector('#title').disabled = false;
  const adFormElements =  Array.from(document.querySelectorAll('.ad-form__element'));
  for (const element of adFormElements){
    element.disabled = false;
  }

  //Форма с фильтрами .map__filters заблокирована так же, как и форма .ad-form — на форму добавлен специальный класс, а на её интерактивные элементы атрибуты disabled;
  const mapFilters = document.querySelector('.map__filters');
  mapFilters.classList.remove('map__filters--disabled');

  const mapFilterElements = Array.from(document.querySelectorAll('.map__filter'));
  for (const element of mapFilterElements){
    element.disabled = false;
  }

  document.querySelector('#housing-features').disabled = false;
};

export {
  adFormValidate,
  formPageDisable,
  formPageActivate
};
