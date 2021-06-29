const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;
const MAX_PRICE = 1000000;

const ALLOWED_GUESTS_FOR_ROOMS = {
  1: ['1'],
  2: ['1', '2'],
  3: ['1', '2', '3'],
  100: ['0'],
};

const adFormValidate = () => {
  //Заголовок объявления:
  //Обязательное текстовое поле;
  //Минимальная длина — 30 символов;
  //Максимальная длина — 100 символов.

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

  //Цена за ночь:
  //Обязательное поле;
  //Числовое поле;
  //Максимальное значение — 1000000.

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

  //Поле «Количество комнат» синхронизировано с полем «Количество мест» таким образом, что при выборе количества комнат вводятся ограничения на допустимые варианты выбора количества гостей:
  //1 комната — «для 1 гостя»;
  //2 комнаты — «для 2 гостей» или «для 1 гостя»;
  //3 комнаты — «для 3 гостей», «для 2 гостей» или «для 1 гостя»;
  //100 комнат — «не для гостей».
  const roomNumber = document.querySelector('#room_number');
  const capacity = document.querySelector('#capacity');

  const onRoomNumberChange = () => {
    const capacityOptions = Array.from(capacity.children);

    if (roomNumber.value === '1') {
      capacityOptions[0].disabled = true;
      capacityOptions[1].disabled = true;
      capacityOptions[2].disabled = false;
      capacityOptions[3].disabled = true;
    }

    if (roomNumber.value === '2') {
      capacityOptions[0].disabled = true;
      capacityOptions[1].disabled = false;
      capacityOptions[2].disabled = false;
      capacityOptions[3].disabled = true;
    }

    if (roomNumber.value === '3') {
      capacityOptions[0].disabled = false;
      capacityOptions[1].disabled = false;
      capacityOptions[2].disabled = false;
      capacityOptions[3].disabled = true;
    }

    if (roomNumber.value === '100') {
      capacityOptions[0].disabled = true;
      capacityOptions[1].disabled = true;
      capacityOptions[2].disabled = true;
      capacityOptions[3].disabled = false;
    }
    const allowedGuests = ALLOWED_GUESTS_FOR_ROOMS[roomNumber.value];
    if(!allowedGuests.includes(capacity.value)) {
      capacity.value = allowedGuests[0];
    }
  };
  roomNumber.addEventListener('change', onRoomNumberChange);
  roomNumber.dispatchEvent(new Event('change'));
};

export {
  adFormValidate
};
