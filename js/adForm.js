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

export {
  adFormValidate
};
